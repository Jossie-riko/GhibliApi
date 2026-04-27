import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Film {
  id: string;
  title: string;
  image: string;
  director: string;
  release_date: string;
}

function Home() {
  const [films, setFilms] = useState<Film[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films/")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  const filtradas = films.filter((f) =>
    f.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Películas Ghibli</h1>

      <input
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {filtradas.map((film) => (
          <div key={film.id}>
            <Link to={`/pelicula/${film.id}`}>
              <img src={film.image} width="100%" />
              <h3>{film.title}</h3>
            </Link>
            <p>{film.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;