import React, { useState, useEffect } from 'react';

const ProductForm = ({ onAddProduct, onUpdateProduct, editingProduct }) => {
  const [producto, setProducto] = useState({
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  });
  useEffect(() => {
    if (editingProduct) {
      setProducto(editingProduct);
    }
  }, [editingProduct]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const precioConDescuento = producto.precioUnitario * (1 - producto.descuento / 100);
    const nuevoProducto = {
      ...producto,
      precioConDescuento: precioConDescuento.toFixed(2),
    };
    if (editingProduct) {
      onUpdateProduct(nuevoProducto);
    } else {
      onAddProduct(nuevoProducto);
    }
    setProducto({
      id: '',
      descripcion: '',
      precioUnitario: '',
      descuento: '',
      stock: ''
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingProduct ? 'Editar Producto' : 'Agregar Producto'}</h3>

      <input
        type="text"
        name="id"
        placeholder="ID"
        value={producto.id}
        onChange={handleChange}
        required
        disabled={editingProduct}
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={producto.descripcion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precioUnitario"
        placeholder="Precio Unitario"
        value={producto.precioUnitario}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="descuento"
        placeholder="Descuento (%)"
        value={producto.descuento}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={producto.stock}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editingProduct ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
};
export default ProductForm;
