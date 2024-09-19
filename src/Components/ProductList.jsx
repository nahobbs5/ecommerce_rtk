import React, { useState } from 'react';
import './ProductList.css'; 
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';

const ProductList = () => {
    //adding prouct and store data globally
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); //state to store disabled products 

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    //Mark product as disabled
    setDisabledProducts([...disabledProducts, products, product.id]);
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {/*Implement ProductList componenet  */}
        {products.map(product => (
            <li key={product.id} className="product-list-item">
                <span>{product.name} - ${product.price}</span>
                {/*Button is disabled if product is in disabled products */}
                <button className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)} disabled={disabledProducts.includes(product.id)}>
                    Add to Cart
                </button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
