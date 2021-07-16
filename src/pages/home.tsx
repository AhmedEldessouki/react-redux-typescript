import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "../components/signin";
import AdminDashboard from "./adminDashboard";
import PageEight from "./pageEight";
import PageEleven from "./pageEleven";
import PageFive from "./pageFive";
import PageFour from "./pageFour";
import PageNine from "./pageNine";
import PageOne from "./pageOne";
import PageSeven from "./pageSeven";
import PageSix from "./pageSix";
import PageTen from "./pageTen";
import PageThree from "./pageThree";
import PageTwelve from "./pageTwelve";
import PageTwo from "./pageTwo";

function Home() {
  return (
    <div>
      <header>
        <Router>
          <nav className="Nav">
            <Link to="/">Home</Link>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
            <Link to="/page-one">Page one</Link>
            <Link to="/page-two">Page two</Link>
            <Link to="/page-three">Page three</Link>
            <Link to="/page-four">Page four</Link>
            <Link to="/page-five">Page five</Link>
            <Link to="/page-six">Page six</Link>
            <Link to="/page-seven">Page seven</Link>
            <Link to="/page-eight">Page eight</Link>
            <Link to="/page-nine">Page nine</Link>
            <Link to="/page-ten">Page ten</Link>
            <Link to="/page-eleven">Page eleven</Link>
            <Link to="/page-twelve">Page twelve</Link>
          </nav>
          <Switch>
            <Route path="/" exact />
            <Route path="/admin-dashboard">
              <AdminDashboard />
            </Route>
            <Route path="/page-one">
              <PageOne />
            </Route>
            <Route path="/page-two">
              <PageTwo />
            </Route>
            <Route path="/page-three">
              <PageThree />
            </Route>
            <Route path="/page-four">
              <PageFour />
            </Route>
            <Route path="/page-five">
              <PageFive />
            </Route>
            <Route path="/page-six">
              <PageSix />
            </Route>
            <Route path="/page-seven">
              <PageSeven />
            </Route>
            <Route path="/page-eight">
              <PageEight />
            </Route>
            <Route path="/page-nine">
              <PageNine />
            </Route>
            <Route path="/page-ten">
              <PageTen />
            </Route>
            <Route path="/page-eleven">
              <PageEleven />
            </Route>
            <Route path="/page-twelve">
              <PageTwelve />
            </Route>
          </Switch>
        </Router>
      </header>
      <SignIn />
    </div>
  );
}

export default Home;
