import "./index.css"
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Add from "./pages/Add"
import Report from "./pages/Report";
import Nopage from "./pages/Nopage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
