import React from 'react';
import { PropTypes } from 'prop-types';

const Offer = ({ offer }) => {
  const {offerDescription, price, validFor } = offer;
    return (
      <div className="offer-wrapper">
          <div className="offer-offerDescription">{offerDescription}</div>
          <div className="offer-price">{price}</div>
          <div className="offer-validFor">{validFor}</div>
      </div>
    );
};

Offer.PropTypes = {
    offer: PropTypes.shape({
    offerDescription: PropTypes.string,
    price: PropTypes.number,
    validFor: PropTypes.string
  })
}

export default Offer;
