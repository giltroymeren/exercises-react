import "./App.css";
import News from "./News";
import SideNews from "./SideNews";

const App = () => {
  const NEWS_SOURCES = {
    headlines: {
      name: "headline",
      type: "top-headlines",
      query: "source=aljazeera",
    },
    lifestyle: {
      name: "lifestyle",
      type: "everything",
      query: "domains=wsj.com",
    },
    technology: {
      name: "technology",
      type: "everything",
      query: "domains=techcrunch.com",
    },
  };

  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              What's going on?
            </a>
          </div>
        </nav>
      </div>

      <div className="row">
        <div className="col s8">
          <News source={NEWS_SOURCES.headlines} />
          <News source={NEWS_SOURCES.lifestyle} />
        </div>
        <div className="col s4">
          <SideNews source={NEWS_SOURCES.technology} />
        </div>
      </div>
    </div>
  );
};

export default App;
