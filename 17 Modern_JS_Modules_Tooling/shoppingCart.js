console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

//Exportar un elemento
export const addToCart = (product, quatity) => {
  cart.push({ product, quatity });
  console.log(`${quatity} ${product}`);
};

const totalPrice = 237;
const totalQuantity = 23;

//Exportar varios elementos y cambiarles el nombre
export { totalPrice, totalQuantity as qt };

// Exportacion default
export default (product, quatity) => {
  cart.push({ product, quatity });
  console.log(`${quatity} ${product}`);
};
