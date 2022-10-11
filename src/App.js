import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar />} path="/">
          <Route element={<LandingPage />} path="/" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
