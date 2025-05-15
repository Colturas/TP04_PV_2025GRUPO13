import React, { useState, useEffect, useCallback, useMemo } from 'react';
/*import ProductForm from './ProductForm';
import ProductList from './ProductList';*/

const Product = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  // Muestra cambios en consola
  useEffect(() => {
    console.log("Lista actualizada de productos:", productos);
  }, [productos]);

  // deberia agregar producto
  const agregarProducto = useCallback((nuevoProducto) => {
    setProductos([...productos, { ...nuevoProducto, id: Date.now() }]);
  }, [productos]);

  // Esto estaria eliminando producto
  const eliminarProducto = useCallback((id) => {
    setProductos(productos.filter(p => p.id !== id));
  }, [productos]);
  
  // Seleccionar producto para editar
  const seleccionarProducto = useCallback((producto) => {
    setProductoEditando(producto);
  }, []);

  // Guardar cambios al editar
  const guardarEdicion = useCallback((productoEditado) => {
    setProductos(productos.map(p =>
      p.id === productoEditado.id ? productoEditado : p
    ));
    setProductoEditando(null);
  }, [productos]);

  // Filtrar por búsqueda
  const productosFiltrados = useMemo(() => {
    return productos.filter(p =>
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda, productos]);

  return (
    <div>
      <h2>Titulo (capaz Gestión de Productos)</h2>

      { /* Buscador */ }
      <input
        type="text"
        placeholder="Buscar por descripción..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />

      { /* Formulario para agregar o editar */}
      <ProductForm
        alAgregar={agregarProducto}
        productoEditar={productoEditando}
        alEditar={guardarEdicion}
      />

      {/*Lista de productos*/}
      <ProductList
        productos={productosFiltrados}
        alEliminar={eliminarProducto}
        alEditar={seleccionarProducto}
      />
    </div>
  );
};
export default Product;