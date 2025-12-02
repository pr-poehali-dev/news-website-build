
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CCTV from "./pages/CCTV";
import LAN from "./pages/LAN";
import SCS from "./pages/SCS";
import ACS from "./pages/ACS";
import Contacts from "./pages/Contacts";

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/lan" element={<LAN />} />
          <Route path="/scs" element={<SCS />} />
          <Route path="/acs" element={<ACS />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;