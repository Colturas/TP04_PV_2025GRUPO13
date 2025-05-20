<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import ProductForm from "./assets/components/ProductForm";
import Product from "./assets/components/Product";
const App = () => {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const handleAddProduct = useCallback((nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  }, [productos]);
  const handleUpdateProduct = useCallback((productoActualizado) => {
    const nuevosProductos = productos.map(p =>
      p.id === productoActualizado.id ? productoActualizado : p
    );
    setProductos(nuevosProductos);
    setProductoEditando(null);
  }, [productos]);
  const handleEdit = useCallback((producto) => {
    setProductoEditando(producto);
  }, []);
  const handleDelete = useCallback((id) => {
    const nuevosProductos = productos.filter(p => p.id !== id);
    setProductos(nuevosProductos);
  }, [productos]);
  useEffect(() => {
    console.log('Productos actuales:', productos);
  }, [productos]);
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Administración de Productos</h1>
      <ProductForm
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        editingProduct={productoEditando}
      />
      <hr />
      <Product
        productos={productos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
export default App;
=======
import React from 'react';
import Product from './assets/components/Product';
import './assets/productstyle.css';
function App() {
  return <Product />;
}
<<<<<<< HEAD

export default App
=======
export default App;
>>>>>>> ebad217f202aba4311f91f3df6ec2bdc34be04f3
>>>>>>> 57c8052ad2bee8acae0ca1381a4b1ba919dee5d1
