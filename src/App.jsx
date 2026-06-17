import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import Careers from "./pages/Careers.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
