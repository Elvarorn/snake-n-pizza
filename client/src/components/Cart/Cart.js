import React from 'react';
import Pizza from '../Pizza/Pizza';


const Cart = () => {
    var clearCart = () =>{
        localStorage.clear();
        window.location.reload();
    }

    var isEmpty = (toCheck) =>{
        for(var key in obj) {
            if(toCheck.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    var cartItems = localStorage.getItem('items-in-cart');
    var obj = JSON.parse(cartItems);
    console.log(obj);

    if(isEmpty(obj)) {
        return (
            <div>
                <h3 className="emptyCart"> Your cart is Empty</h3>
            </div>
        );
    } else {
        return (
            <div className ="the-cart">
                <button className="cart-button" onClick={() => clearCart()}>Clear Cart</button>
                {obj.map(p => <Pizza key={p.id} pizza={p} />)}
            </div>
        );
    }

};

export default Cart
