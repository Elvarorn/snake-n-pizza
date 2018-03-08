import React from 'react';
import { PropTypes } from 'prop-types';

const _Offer = ({ _offer }) => {
  const {offer, price, validFor } = _offer;
    return (
      <div className="offer-wrapper">
          <div className="offer-offerDescription">{ offer }</div>
          <div className="offer-price">{ price }</div>
          <div className="offer-validFor">{ validFor }</div>
      </div>
    );
};

_Offer.PropTypes = {
    _offer: PropTypes.shape({
    offer: PropTypes.string,
    price: PropTypes.number,
    validFor: PropTypes.string
  })
}

export default _Offer;
