// Library import
// import { Person } from "@mui/icons-material";
import { Route, Router, Routes } from "react-router-dom";

// module import
import Homepage from "./pages/home/home";
import Adoption from "./pages/adoption/adoption";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CommunityHomePage from "./pages/community/community_homepage/com_home";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <CommunityHomePage />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="adoption" element={<Adoption />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
