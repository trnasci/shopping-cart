require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  describe('1 - Teste a função fetchItem', () => {
    it('Verifica se fetchItem é uma função',async () => {        
        expect(typeof fetchItem === 'function').toBeTruthy();
    })
    it('Verifica se chamou o fetchItem com a url certa',async () => {
        const data = await fetchItem('MLB1615760527');
        expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
    })
    it('Verificar o retorno da api', async () => {
        const result = fetchItem('MLB1615760527')        
        expect(result).resolves.toEqual(item);
    })
    it('Verificar o retorno caso não seja passado um parametro ', async () => {        
        const erro = await fetchItem()
        expect(erro).toEqual(new Error ('You must provide an url'));
    })
    
  
});
});
