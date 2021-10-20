import { Route } from "react-router";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Jobs from "./pages/jobs/Jobs";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
