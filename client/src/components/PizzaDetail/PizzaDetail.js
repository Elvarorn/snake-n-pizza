import React from 'react';

const PizzaDetail = () => {

    var json = localStorage.getItem('pizza-to-detail');
    var pizza = JSON.parse(json);
    console.log(pizza);


    return (
        <div className="PizzaDetail">
            <div className="pizza-wrapper">
                <div className="pizza-image">
                    <img src={pizza.image} alt=""/>
                </div>
                <div className="pizza-name">{pizza.name}</div>
                <div className="pizza-description">{pizza.description}</div>
                <div className="pizza-price">{pizza.price}</div>
            </div>
        </div>
    );
};

export default PizzaDetail;
