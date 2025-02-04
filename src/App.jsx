import { Route, Routes, useLocation } from "react-router";
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import BookATable from "./components/BookATable";

function App() {
  const location = useLocation();
  const excludePaths = ['/bookatable'];

  return (
    <>
      {!excludePaths.includes(location.pathname) && <Navbar/>}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/bookatable">
          <Route index element={<BookATable />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
