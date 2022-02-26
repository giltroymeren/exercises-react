import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteUserEvent } from "../../redux/userEvents";
import { IUserEvent } from "../../redux/userEventsTypes";

interface IEventItemProps {
  event: IUserEvent;
}

const EventItem: React.FC<IEventItemProps> = ({ event }) => {
  const dispatch = useDispatch();

  const onDelete = (id: IUserEvent["id"]) => {
    dispatch(deleteUserEvent(id));
  };

  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">11:11 - 12:12</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button
        className="calendar-event-delete-button"
        onClick={() => onDelete(event.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default connect(null, { deleteUserEvent })(EventItem);
