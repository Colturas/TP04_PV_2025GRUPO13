import React, { useState, useMemo, useCallback, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    console.log('Productos actualizados:', products);
  }, [products]);

  const addProduct = useCallback((newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  }, []);

  const modifyProduct = useCallback((updatedProduct) => {
    setProducts(prev =>
      prev.map(p => p.id === updatedProduct.id ? updatedProduct : p)
    );
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts(prev =>
      prev.map(p => p.id === id ? { ...p, estado: false } : p)
    );
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.estado &&
      (p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
       p.id.toString().includes(searchTerm))
    );
  }, [products, searchTerm]);

  return (
    <div className="app">
      <h1>Gestor de Productos</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <ProductForm
        onAdd={addProduct}
        onModify={modifyProduct}
        productToEdit={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      <ProductList
        products={filteredProducts}
        onDelete={deleteProduct}
        onEdit={setEditingProduct}
      />
    </div>
  );
}

export default Product;
