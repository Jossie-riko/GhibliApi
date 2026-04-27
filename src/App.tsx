import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import Favoritos from "./favoritos";
import Informativa from "./informativa";
import Pelicula from "./Pelicula";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/informativa">Informativa</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:id" element={<Pelicula />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/informativa" element={<Informativa />} />
      </Routes>
    </Router>
  );
}

export default App;