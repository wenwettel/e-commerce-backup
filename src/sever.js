import { productos } from './mocks';

//Promesa

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    if (productos.length === 0) {
      reject(new Error('no hay productos'));
    }
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};
