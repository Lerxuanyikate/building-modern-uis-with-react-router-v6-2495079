import {Routes, Route} from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";
import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Header from "./Header";
import Session from "./Session";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 tech"/>} />
        <Route path="About" element={<About/>} />
        <Route path="categories" element={<Categories/>} >
          <Route path=" :catId" element={<Category/>}>
            <Route path=":sessionId" element={<Session/>} />
          </Route>
        </Route>
        <Route path="*" 
        element={<h1 className="not-found">404: Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
