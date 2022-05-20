import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ price, salePrice }) {
  // const showSalePrice = salePrice === 0;

  return (
    <span
      style={{
        display: 'flex',
      }}
    >
      {salePrice === 0 ? (
        <p>${price}</p>
      ) : (
        <>
          <p
            style={{
              textDecoration: 'line-through',
            }}
          >
            ${price}
          </p>
          <p>${salePrice}</p>
        </>
      )}
    </span>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
};

Price.defaultProps = {
  salePrice: 0,
};