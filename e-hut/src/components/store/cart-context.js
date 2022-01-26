import React from 'react';


const CartContext = React.createContext({
    items: [],
    numberOfShops:0,
    totalAmount: 0,
    addItem: (item) =>{},
    removeItem: (id) => {},
    removeItemFully: (id) => {},
    removeEverything: () =>{},
    addShop: (num) =>{},
})

export default CartContext;