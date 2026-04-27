import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favoritos() {
  const [films, setFilms] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);

    fetch("https://ghibliapi.vercel.app/films/")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  const favFilms = films.filter((f) => favorites.includes(f.id));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Favoritos</h1>

      {favFilms.map((film) => (
        <div key={film.id}>
          <Link to={`/pelicula/${film.id}`}>
            <h3>{film.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;