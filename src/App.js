import { Route } from "react-router";
import Landing from "./pages/landing/Landing";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <switch> */}
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/contact" component={Contact} />
      {/* </switch> */}
    </BrowserRouter>
  );
}

export default App;
