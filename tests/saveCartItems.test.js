const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se saveCartItems é chamada com os parametros corretos',() => {        
    expect(saveCartItems('<ol><li>Item</li></ol>')).toEqual(localStorage.setItem('cartItems', '<ol><li>Item</li></ol>'));
})
});
