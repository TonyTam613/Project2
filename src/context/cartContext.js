import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (game) => {
        var found = false;
        if (cart.length === 0) {
            setCart([game]);
        }
        if (cart.find((cartGame) => cartGame.id === game.id)) {
            found = true;
        }
        if (!found) {
            setCart([...cart, game]);
        }
    };

    const removeFromCart = (discard) => {
        var newCart = cart.filter((game) => game.id !== discard.id)
        setCart(newCart);
    };
    return ( 
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {props.children}    
        </CartContext.Provider>
    );
}
 
export default CartContextProvider;