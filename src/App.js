import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Product = ({ title, price, imageUrl }) => (
  <Col md={3} sm={6} xs={12} className="mb-4">
    <Card>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  </Col>
);

const App = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Products</h1>
      <Row>
        {productsArr.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </Row>
    </Container>
  );
};

export default App;
