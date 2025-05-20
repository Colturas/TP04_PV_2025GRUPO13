import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onDelete, onEdit }) {
  if (products.length === 0) {
    return <p>No hay productos que coincidan con la búsqueda.</p>;
  }

  return (
    <div className="product-list">
      <h2>Listado de Productos</h2>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ProductList;
