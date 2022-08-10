const fetchItem = async (cod) => {
  try {  
    const ENDPOINT = `https://api.mercadolibre.com/items/${cod}`;
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data; 
} catch (error) {
  return new Error('You must provide an url');
}
};
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }