const fetchProducts = async (product) => {
  try {  
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
      return data.results; 
} catch (error) {
  return new Error('You must provide an url');
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}