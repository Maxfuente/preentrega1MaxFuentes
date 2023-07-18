import 'bootstrap/dist/css/bootstrap.css';
const products =[
    {
        id: '1',
        name: 'Disco Kingston 120GB',
        price: 24.990,
        category: 'Discos SSD',
        img:'https://media.kingston.com/kingston/product-card/ktc-product-ssd-kc600-skc600-1-tn.png',
        stock: 20,
        description: 'Descripcion Disco SSD'
    },
    {
        id: '2',
        name: 'Memoria Kingston ',
        price: 44.990,
        category: 'Memoria Ram SSD',
        img:'https://media.kingston.com/kingston/product/ktc-product-memory-beast-ddr4-rgb-single-1-tn.png',
        stock: 10,
        description: 'Descripcion Memoria'
    },

    {
        id: '3',
        name: 'Audifonos',
        price: 64.999,
        category: 'Audifonos',
        img:'https://casaroyal.cl/media/catalog/product/1/1/111625_7_1_.jpg?width=300&height=&canvas=300,&optimize=high&bg-color=255,255,255&fit=bounds',
        stock: 15,
        description: 'Descripcion Audifonos'
    },

]
export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId));
      }, 500);
    });
  };