import React from 'react';

const ProductItem = ({ producto, onEdit, onDelete }) => {
  const {
    id,
    descripcion,
    precioUnitario,
    descuento,
    precioConDescuento,
    stock
  } = producto;

  return (
    <div className="product-item border p-4 rounded shadow-md mb-4">
      <h3 className="text-xl font-bold">{descripcion}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Precio unitario:</strong> ${precioUnitario.toFixed(2)}</p>
      <p><strong>Descuento:</strong> {descuento}%</p>
      <p><strong>Precio con descuento:</strong> ${precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {stock} unidades</p>
      
      <div className="flex gap-2 mt-3">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => onEdit(producto)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={() => onDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
