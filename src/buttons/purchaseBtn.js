import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext.js';
import Button from 'react-bootstrap/Button';

const PurchaseBtn = (props) => {
    var game = props.game;
    var [btnText, setTxt] = useState("Add To Cart");
    const { addToCart } = useContext(CartContext);
    function clickHandle() {
        addToCart(game);
        setTxt("Added");
    }
    useEffect(() => {
        console.log(btnText);
    }, [btnText])

    return (
        <Button aria-label={`purchase ${game.title} button`} className='col-2' id="purchaseBtn" size="sm" variant='dark' onClick={clickHandle} style={{
            maxHeight: "50px",
            marginLeft: "auto",
            marginRight: "3vw"
        }}> {btnText} </Button>
    );
}

export default PurchaseBtn;