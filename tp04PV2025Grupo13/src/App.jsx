//import { useState } from 'react';
import './App.css';
import Product from './assets/components/Product';

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Administración de Productos</h1>
      <Product />
    </div>
  );
}

export default App;