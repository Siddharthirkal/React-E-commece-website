// cartReducer.js

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Implement logic to add items to the cart
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
  
      // Add other cases as needed
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  