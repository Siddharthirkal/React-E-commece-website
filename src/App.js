import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductCard from './components/ProductCard'; // Add this import
import Cart from './components/Cart';
import About from './Pages/About';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Movie from './Pages/Movie';
import ContactUs from './Pages/ContactUs';
import ProductDetail from './components/ProductDetail';

export const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.title === product.title);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <Container>
        <NavBar />

        {/* <h1 className="mt-5 mb-4">Products</h1> */}
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index}>
              {/* <ProductCard product={product} handleAddToCart={handleAddToCart} /> */}
            </Col>
          ))}
        </Row>

        <Button variant="success" className="position-fixed top-0 end-0 m-4" onClick={handleCartClick}>
          Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </Button>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products products={productsArr} handleAddToCart={handleAddToCart} />} />
          <Route path="/products/:productId" element={<ProductDetail products={productsArr} />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

        {showCart && <Cart cartItems={cartItems} handleClose={handleCloseCart} />}
      </Container>
    </Router>
  );
};

export default App;
