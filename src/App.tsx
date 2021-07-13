import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/adminDashboard";
import PageEight from "./pages/pageEight";
import PageEleven from "./pages/pageEleven";
import PageFive from "./pages/pageFive";
import PageFour from "./pages/pageFour";
import PageNine from "./pages/pageNine";
import PageOne from "./pages/pageOne";
import PageSeven from "./pages/pageSeven";
import PageSix from "./pages/pageSix";
import PageTen from "./pages/pageTen";
import PageThree from "./pages/pageThree";
import PageTwelve from "./pages/pageTwelve";
import PageTwo from "./pages/pageTwo";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
