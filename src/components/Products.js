// Products.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = ({ products, handleAddToCart }) => {
  return (
    <div>
      <h1 className="mt-5 mb-4">Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index}>
            <ProductCard product={product} handleAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
