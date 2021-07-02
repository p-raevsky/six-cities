import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import Header from '../../elements/header';
import CitiesList from '../../elements/cities-list';

import {sortFilteredPlaces} from '../../../six-cities-data';
import LoadWrapper from '../../elements/load-wrapper';
import PlacesWrapper from '../../elements/places-wrapper';

import {
  getSelectedSorting,
  getCity
} from '../../../store/process/selectors';
import {
  getIsOffersDataLoaded,
  getOffers
} from '../../../store/data/selectors';

function MainPage() {
  const offers = useSelector(getOffers);
  const selectedSorting = useSelector(getSelectedSorting);
  const city = useSelector(getCity);
  const isOffersDataLoaded = useSelector(getIsOffersDataLoaded);

  const places = useMemo(() => sortFilteredPlaces(offers, selectedSorting, city), [offers, selectedSorting, city]);

  return (
    <div className="page page--gray page--main">
      <Header isActive />
      <main className={`page__main page__main--index${!places.length ? ' page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <LoadWrapper isLoaded = {isOffersDataLoaded}>
              <PlacesWrapper places = {places} />
            </LoadWrapper>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
