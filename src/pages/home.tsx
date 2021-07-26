import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
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

type PagesType =
  | "admindashboard"
  | "pageone"
  | "pagetwo"
  | "pagethree"
  | "pagefour"
  | "pagefive"
  | "pagesix"
  | "pageseven"
  | "pageeight"
  | "pagenine"
  | "pageten"
  | "pageeleven"
  | "pagetwelve";

const pages = {
  admindashboard: {
    path: "/admin-dashboard",
    component: AdminDashboard,
  },
  pageone: {
    path: "/page-one",
    component: PageOne,
  },
  pagetwo: {
    path: "/page-two",
    component: PageTwo,
  },
  pagethree: {
    path: "/page-three",
    component: PageThree,
  },
  pagefour: {
    path: "/page-four",
    component: PageFour,
  },
  pagefive: {
    path: "/page-five",
    component: PageFive,
  },
  pagesix: {
    path: "/page-six",
    component: PageSix,
  },
  pageseven: {
    path: "/page-seven",
    component: PageSeven,
  },
  pageeight: {
    path: "/page-eight",
    component: PageEight,
  },
  pagenine: {
    path: "/page-nine",
    component: PageNine,
  },
  pageten: {
    path: "/page-ten",
    component: PageTen,
  },
  pageeleven: {
    path: "/page-eleven",
    component: PageEleven,
  },
  pagetwelve: {
    path: "/page-twelve",
    component: PageTwelve,
  },
};

function Home() {
  const { user, dispatch } = useAuth();
  const [allowedRoutes] = React.useState(() => {
    if (user?.role === "admin") return [...Object.values(pages)];
    else return user?.access.map((item) => pages[item as PagesType]);
  });
  const Links = React.useMemo(
    () =>
      allowedRoutes?.map((item) => (
        <Link to={item.path} key={item.path}>
          {item.component.name}
        </Link>
      )),
    [allowedRoutes]
  );
  const Routes = React.useMemo(
    () => allowedRoutes?.map((item) => <Route key={item.path} {...item} />),
    [allowedRoutes]
  );
  return (
    <div>
      <header>
        <Router>
          <nav className="Nav">
            <Link to="/">Home</Link>
            {Links}
            <button
              type="button"
              onClick={() => dispatch({ type: "sign_out" })}
            >
              logout
            </button>
          </nav>
          <Switch>
            <Route path="/" exact />
            {Routes}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default Home;
