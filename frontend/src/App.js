import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Cars and Bikes E-commerce</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
