// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { productsArr } from '../App';
import { Container, Row, Col, Image, ListGroup, Badge } from 'react-bootstrap';


const ProductDetail = () => {
  const { productId } = useParams();
  console.log('ProductDetail component - productId:', productId);
  const product = productsArr.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="text-center mt-5">Product not found</div>;
  }

  // Dummy reviews
  const dummyReviews = [
    { id: 1, user: 'User1', comment: 'Great product!', rating: 5 },
    { id: 2, user: 'User2', comment: 'Not bad, but could be better.', rating: 3 },
    { id: 3, user: 'User3', comment: 'Awesome color choices.', rating: 4 },
    { id: 4, user: 'User4', comment: 'Quality is excellent.', rating: 5 },
  ];

  

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          {/* Large image */}
          <Image src={product.imageUrl} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="lead">Price: ${product.price}</p>

          {/* Display reviews */}
          <div className="mb-4">
            <h3>Reviews</h3>
            <ListGroup>
              {dummyReviews.map((review) => (
                <ListGroup.Item key={review.id}>
                  <div>
                    <strong>{review.user}</strong> - {review.comment}
                    <Badge pill bg="info" className="ms-2">
                      Rating: {review.rating}
                    </Badge>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          {/* Additional product details */}
          {/* Add your additional product details here */}
          
          {/* Small images */}
          <div className="mt-4">
            <Row>
              <Col>
                <Image src={product.imageUrl} alt={product.title} className="mb-2" style={{ maxWidth: '100%' }} />
              </Col>
              <Col>
                <Image src={product.imageUrl} alt={product.title} className="mb-2" style={{ maxWidth: '100%' }} />
              </Col>
              <Col>
                <Image src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%' }} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
