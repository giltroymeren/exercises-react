import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Paths } from "../utils/paths";
import Details from "./Details";
import PageLayout from "../layout/PageLayout";
import TermsAndConditions from "./Terms and Conditions";

const About: React.FC = () => <h2>About Us</h2>;
const Contact: React.FC = () => <h2>Contact Us</h2>;
const NoMatch: React.FC = () => (
  <>
    <h2>We can't find that page!</h2>
    <Link to="/">Go back to Home</Link>
  </>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={Paths.Home} element={<PageLayout />}>
        <Route path={Paths.Home} element={<Home />}>
          <Route path={Paths.Details} element={<Details />} />
          <Route
            path={Paths.TermsAndConditions}
            element={<TermsAndConditions />}
          />
        </Route>
        <Route path={Paths.About} element={<About />} />
        <Route path={Paths.Contact} element={<Contact />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
