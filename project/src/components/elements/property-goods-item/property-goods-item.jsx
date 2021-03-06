import React from 'react';
import PropTypes from 'prop-types';

function PropertyGoodsItem({goodsItem}) {
  return (
    <li className="property__inside-item">
      {goodsItem}
    </li>
  );
}

PropertyGoodsItem.propTypes = {
  goodsItem: PropTypes.string.isRequired,
};

export default PropertyGoodsItem;
