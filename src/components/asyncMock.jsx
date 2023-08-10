const products = [
    {
        id:"1",
        name:"Nis Sin Ramen",
        category:"Ramen",
        image:"https://cdn.webshopapp.com/shops/225503/files/307494785/image.jpg",
        stock: 15,
        price: 2000,
        description: "Black Garlic Oil Ramen"
    },
    {
        id:"2",
        name:"Spicy Shin Cup",
        category:"Ramen",
        image:"https://images.heb.com/is/image/HEBGrocery/000393287-1",
        stock: 15,
        price: 2000,
        description: "Spicy Ramen"
    },
    {
        id:"3",
        name:"Soon Veggie Noodle Soup",
        category:"Ramen",
        image:"https://m.media-amazon.com/images/I/71WnDinZkaL.jpg",
        stock: 15,
        price: 2000,
        description: "Vegan Ramen"
    }
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 2000)
    })
}

