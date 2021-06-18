import React from 'react';
import CityItem from '../city-item/city-item';

import {Cities} from '../../../const';

function CitiesList() {
  const cities = Object.values(Cities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityItem) => <CityItem key = {cityItem} cityItem = {cityItem} />)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
