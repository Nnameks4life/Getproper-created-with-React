import { Route } from "react-router";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Jobs from "./pages/jobs/Jobs";
import "./index.css";

function Router() {
  const ROUTE = [
    { path: "/", component: Landing },
    { path: "/about", component: AboutUs },
    { path: "/contact", component: Contact },
    { path: "/blog", component: Blog },
    { path: "/jobs", component: Jobs },
  ];
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {ROUTE.map((item, i) => (
          <Route key={i} exact path={item.path} component={item.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
