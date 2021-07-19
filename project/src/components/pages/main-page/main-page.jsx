import React, {useMemo, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../elements/header/header';
import CitiesList from '../../elements/cities-list/cities-list';
import LoadWrapper from '../../elements/load-wrapper/load-wrapper';
import PlacesWrapper from '../../elements/places-wrapper/places-wrapper';

import {sortFilteredPlaces} from '../../../six-cities-data';
import {fetchHotelsList} from '../../../store/api-actions';

import {getSelectedSorting, getCity} from '../../../store/process/selectors';
import {getIsOffersDataLoaded, getOffers} from '../../../store/data/selectors';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotelsList());
  }, [dispatch]);

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
