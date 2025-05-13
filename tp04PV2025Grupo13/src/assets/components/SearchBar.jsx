function SearchBar({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar por ID o descripción..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
}

export default SearchBar;
