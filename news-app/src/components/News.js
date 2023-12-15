import { Component } from "react";
import NewsSingle from "./NewsSingle";

class News extends Component {
  renderItems() {
    return this.props.items.map((item) => (
      <NewsSingle key={item.id} item={item} />
    ));
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default News;
