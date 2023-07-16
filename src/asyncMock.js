import 'bootstrap/dist/css/bootstrap.css';
const products =[
    {
        id: '1',
        name: 'Disco Kingston 120GB',
        price: 24.990,
        category: 'Discos SSD',
        img:'https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-120gb-1-lg.jpg',
        stock: 20,
        description: 'Descripcion Disco SSD'
    },
    {
        id: '2',
        name: 'Disco Kingston 120GB',
        price: 24.990,
        category: 'Discos SSD',
        img:'https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-120gb-1-lg.jpg',
        stock: 20,
        description: 'Descripcion Disco SSD'
    },

    {
        id: '3',
        name: 'Disco Kingston 120GB',
        price: 24.999,
        category: 'Discos SSD',
        img:'https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-120gb-1-lg.jpg',
        stock: 20,
        description: 'Descripcion Disco SSD'
    },

]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}

