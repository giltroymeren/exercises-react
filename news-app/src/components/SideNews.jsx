import * as React from "react";
import SideNewsSingle from "./SideNewsSingle";

const SideNews = ({ source }) => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const url = `https://newsapi.org/v2/${source.type}?language=en&apiKey=${process.env.REACT_APP_API}&${source.query}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error(error));
  }, [source]);

  return (
    <div>
      <div className="row">
        {news &&
          news.map((item) => <SideNewsSingle key={item.title} item={item} />)}
      </div>
    </div>
  );
};

export default SideNews;
