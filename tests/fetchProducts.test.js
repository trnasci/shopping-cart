require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
    it('Verifica se fetchProducts é uma função',async () => {        
        expect(typeof fetchProducts === 'function').toBeTruthy();
    })
    it('Verifica se chamou o fetchProducts com a url certa',async () => {
        const data = await fetchProducts('computador');
        expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    })
    it('Verificar o retorno da api', async () => {
        const result = fetchProducts('computador')        
        expect(result).resolves.toEqual(computadorSearch);
    })
    it('Verificar o retorno caso não seja passado um parametro ', async () => {        
        const erro = await fetchProducts()
        expect(erro).toEqual(new Error ('You must provide an url'));
    })
    
  
});
