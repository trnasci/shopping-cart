const saveCartItems = (string) => {
  localStorage.setItem('cartItems', string);  
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
