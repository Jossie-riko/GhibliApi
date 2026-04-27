import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Pelicula() {
  const { id } = useParams();
  const [film, setFilm] = useState<any>(null);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films/")
      .then((res) => res.json())
      .then((data) => {
        const encontrada = data.find((f: any) => f.id === id);
        setFilm(encontrada);
      });
  }, [id]);

  const toggleFav = () => {
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favs.includes(id)) {
      favs = favs.filter((f: string) => f !== id);
    } else {
      favs.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
  };

  if (!film) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{film.title}</h1>
      <button onClick={toggleFav}>❤️ Favorito</button>

      <img src={film.movie_banner} width="100%" />
      <img src={film.image} width="200" />

      <p>{film.description}</p>
      <p>Director: {film.director}</p>
      <p>Año: {film.release_date}</p>
    </div>
  );
}

export default Pelicula;