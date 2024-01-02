// ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, handleAddToCart }) {
  const navigate = useNavigate();

  const handleClick = () => {
  console.log('Clicked on product card with productId:', product.id);
  navigate(`/products/${product.id}`);
};

  return (
    <Card className="product-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Card.Img src={product.imageUrl} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="primary" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
