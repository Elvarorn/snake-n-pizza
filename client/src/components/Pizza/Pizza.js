import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';



var cartItemArr = [];
var pizzaToDetail;
const Pizza = ({ pizza }) => {

    var addToCartItemArr = (pizza) =>{
        cartItemArr.push(pizza);
        alert('The pizza has been added to the cart, please proceed to the cart to finish your purchase!');
        localStorage.setItem('items-in-cart', JSON.stringify(cartItemArr));
    }

    var pizzaDetail = (pizza) => {
        pizzaToDetail = pizza;
        localStorage.setItem('pizza-to-detail', JSON.stringify(pizzaToDetail));
    }

    const {name, description, price, image } = pizza;

    if(window.location.pathname == '/') {
        return (
            <div className="pizza-wrapper">

                <div className="pizza-image">
                    <img src={image} alt=""/>
                </div>
                <div className="pizza-name">{name}</div>

                <button className="menu-button button" onClick={() => addToCartItemArr(pizza)}>Add to Cart</button>
                <Link to={'/pizza'}>
                    <button className="menu-button button" onClick={() => pizzaDetail(pizza)}>Details about the pizza!</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="pizza-wrapper">
                <div className="pizza-image">
                    <img src={image} alt=""/>
                </div>
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
            </div>
        );
    }
};

Pizza.PropTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
}

export default Pizza;
