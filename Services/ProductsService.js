const PRODUCTS = [
    {
        id: 100,
        name: 'Moschino',
        price: 100,
        image: require('../assets/Products/Moschino.jpg'),
        description: 'A simple casual wear.'
    }, 

    {
        id: 101,
        name: 'Rhude Sleeve',           
        price: 250,
        image: require('../assets/Products/Rhude Sleeve.jpg'),
        description: 'Mostly worn by Males.'
    },

    {
        id: 102,
        name: 'Travis SCott McDonald Smile',
        price: 350,
        image: require('../assets/Products/Travis SCott McDonald Smile.jpg'),
        description: 'A simple t-shirt for outing.'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}