const olCart = document.querySelector('ol.cart__items');
const sectionItems = document.querySelector('.items');
const buttonClearCart = document.querySelector('.empty-cart');
const totalPrice = document.querySelector('.total-price');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = ({ target }) => {
  target.remove();
  totalPrice.innerText = Number(totalPrice.innerText) - Number(target.id);
  localStorage.setItem('totalPrice', totalPrice.innerText);
  saveCartItems(olCart.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};
const getProduct = async () => {
  const product = await fetchProducts('computador');
  return product;
};
const createElementOfPage = (product) => {
  product.forEach((element) => {
    const newProduct = createProductItemElement(
      { sku: element.id, name: element.title, image: element.thumbnail },
);
    sectionItems.appendChild(newProduct);
    const buttonElement = newProduct.querySelector('.item__add');
    buttonElement.addEventListener('click', async () => {
      const product2 = await fetchItem(getSkuFromProductItem(newProduct));
  const elementLi = createCartItemElement(
    { sku: product2.id, name: product2.title, salePrice: product2.price },
);
  elementLi.id = product2.price;
  olCart.appendChild(elementLi);
  saveCartItems(olCart.innerHTML);
  totalPrice.innerText = Number(totalPrice.innerText) + product2.price;
  localStorage.setItem('totalPrice', totalPrice.innerText);
  }); 
}); 
};

buttonClearCart.addEventListener('click', () => {
  olCart.innerHTML = '';
  saveCartItems(olCart.innerHTML);
  totalPrice.innerText = 0;
  localStorage.setItem('totalPrice', totalPrice.innerText);
});
const onLoadLiCart = () => {
  olCart.innerHTML = getSavedCartItems();
};
const onLoadTotalPrice = () => {
  totalPrice.innerText = localStorage.getItem('totalPrice');
};

window.onload = async () => {
  createElementOfPage(await getProduct());
  onLoadLiCart();
  onLoadTotalPrice();  
};
