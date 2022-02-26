import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { TRootState } from "../../redux/store";
import {
  deleteUserEvent,
  selectUserEventsArray,
  loadUserEvents,
} from "../../redux/userEvents";
import { IUserEvent } from "../../redux/userEventsTypes";
import { appendZeroToTime } from "../../utils";
import "./Calendar.css";
import EventItem from "./EventItem";

const mapStateToProps = (state: TRootState) => ({
  events: selectUserEventsArray(state),
});

const mapDispatchToProps = {
  deleteUserEvent,
  loadUserEvents,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type TPropsFromRedux = ConnectedProps<typeof connector>;
interface ICalendarProps extends TPropsFromRedux {}

const getDateKey = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${appendZeroToTime(month)}-${appendZeroToTime(day)}`;
};

const groupByDay = (events: IUserEvent[]) => {
  const groups: Record<string, IUserEvent[]> = {};

  const addToGroup = (dateKey: string, event: IUserEvent) => {
    if (groups[dateKey] === undefined) {
      groups[dateKey] = [];
    }

    groups[dateKey].push(event);
  };

  events.forEach((event) => {
    const dateStartKey = getDateKey(new Date(event.dateStart));
    const dateEndKey = getDateKey(new Date(event.dateEnd));

    addToGroup(dateStartKey, event);

    if (dateEndKey !== dateStartKey) {
      addToGroup(dateEndKey, event);
    }
  });

  return groups;
};

const Calendar: React.FC<ICalendarProps> = ({ events, loadUserEvents }) => {
  useEffect(() => {
    loadUserEvents();
  }, []);

  let groupedEvents: ReturnType<typeof groupByDay> | undefined =
    groupByDay(events);
  let sortedGroupedKeys: string[] | undefined;

  if (events.length) {
    groupedEvents = groupByDay(events);
    sortedGroupedKeys = Object.keys(groupedEvents).sort(
      (date1, date2) => +new Date(date2) - +new Date(date1)
    );
  }

  return groupedEvents && sortedGroupedKeys ? (
    <div className="calendar">
      {sortedGroupedKeys.map((day) => {
        const events = groupedEvents![day];
        return (
          <div className="calendar-day" key={day}>
            <div className="calendar-day-label">
              <span>{day}</span>
            </div>
            <div className="calendar-events">
              {events.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default connector(Calendar);
