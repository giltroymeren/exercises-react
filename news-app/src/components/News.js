import { Component } from "react";
import NewsSingle from "./NewsSingle";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${process.env.REACT_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.state({ news: data.articles }))
      .catch((error) => console.error(error));
  }

  renderItems() {
    return this.props.news.map((item) => (
      <NewsSingle key={item.id} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
