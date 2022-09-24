import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
