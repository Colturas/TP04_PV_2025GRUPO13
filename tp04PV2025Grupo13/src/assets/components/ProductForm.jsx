import React, { useState, useEffect } from 'react';

const initialForm = {
  id: '',
  nombre: '',
  marca: '',
  descripcion: '',
  precioUnitario: '',
  descuento: '',
  stock: ''
};

function ProductForm({ onAdd, onModify, productToEdit, setEditingProduct }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (productToEdit) {
      setForm(productToEdit);
    } else {
      setForm(initialForm);
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precioConDescuento = form.precioUnitario * (1 - form.descuento / 100);

    const newProduct = {
      ...form,
      precioUnitario: parseFloat(form.precioUnitario),
      descuento: parseFloat(form.descuento),
      precioConDescuento: parseFloat(precioConDescuento.toFixed(2)),
      stock: parseInt(form.stock),
      estado: true
    };

    if (productToEdit) {
      onModify(newProduct);
      setEditingProduct(null);
    } else {
      onAdd(newProduct);
    }

    setForm(initialForm);
  };

  const handleCancel = () => {
    setForm(initialForm);
    setEditingProduct(null);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>{productToEdit ? 'Modificar Producto' : 'Agregar Producto'}</h2>

      <input
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={handleChange}
        required
        disabled={!!productToEdit} // desactivar si estamos editando
      />
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} required />
      <input name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
      <input type="number" name="precioUnitario" placeholder="Precio Unitario" value={form.precioUnitario} onChange={handleChange} required />
      <input type="number" name="descuento" placeholder="Descuento (%)" value={form.descuento} onChange={handleChange} required />
      <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} required />

      <button type="submit">{productToEdit ? 'Guardar Cambios' : 'Agregar Producto'}</button>
      {productToEdit && <button type="button" onClick={handleCancel}>Cancelar</button>}
    </form>
  );
}

export default ProductForm;