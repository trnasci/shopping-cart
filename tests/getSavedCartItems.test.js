const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se getSavedCartItems é chamada com os parametros corretos',() => {        
    expect(getSavedCartItems()).toEqual(localStorage.getItem('cartItems'));
})
});
