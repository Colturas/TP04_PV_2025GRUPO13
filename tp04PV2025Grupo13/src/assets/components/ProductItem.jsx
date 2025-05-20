import React from 'react';

function ProductItem({ product, onDelete, onEdit }) {
  const {
    id, nombre, marca, descripcion,
    precioUnitario, descuento, precioConDescuento,
    stock
  } = product;

  return (
    <div className="product-item">
      <h3>{nombre} - {marca}</h3>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio:</strong> ${precioUnitario.toFixed(2)}</p>
      <p><strong>Descuento:</strong> {descuento}%</p>
      <p><strong>Precio con descuento:</strong> ${precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {stock}</p>

      <button onClick={() => onEdit(product)}>Editar</button>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}

export default ProductItem;