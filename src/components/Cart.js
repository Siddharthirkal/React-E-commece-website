// Cart.js
import React from 'react';
import { Modal, Card, Button } from 'react-bootstrap';

const Cart = ({ cartItems, handleClose }) => {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item, index) => (
          <Card key={index} className="mb-2">
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                Quantity: {item.quantity} | Price: ${item.price * item.quantity}
              </Card.Text>
              <Button variant="danger">Remove</Button>
            </Card.Body>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
