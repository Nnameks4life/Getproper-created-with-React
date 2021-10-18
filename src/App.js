import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/about-us/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <switch>
        <Route exact path="/about" component={AboutUs} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
