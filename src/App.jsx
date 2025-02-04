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
  const excludePaths = ['/celestial-dine/bookatable'];

  return (
    <>
      {!excludePaths.includes(location.pathname) && <Navbar/>}
      <Routes>
        <Route path="/celestial-dine">
          <Route index element={<Home />} />
          <Route path="/celestial-dine/menu" element={<Menu />} />
          <Route path="/celestial-dine/contact" element={<Contact />} />
          <Route path="/celestial-dine/about" element={<About />} />
        </Route>

        <Route path="/celestial-dine/bookatable">
          <Route index element={<BookATable />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
