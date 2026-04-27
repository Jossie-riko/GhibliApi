function Informativa() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sobre la app</h1>
      <p>Explora películas de Studio Ghibli.</p>

      <ul>
        <li>Buscar películas</li>
        <li>Ver detalles</li>
        <li>Guardar favoritos</li>
      </ul>

      <p>API:</p>
      <a href="https://ghibliapi.vercel.app/films/" target="_blank">
        Ghibli API
      </a>
    </div>
  );
}

export default Informativa;