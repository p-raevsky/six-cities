import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import RoomPage from '../../pages/room-page';
import LoadWrapper from '../load-wrapper';

import {
  fetchHotel,
  fetchNearbyList,
  fetchReviwsList
} from '../../../store/api-actions';
import {
  getOffer,
  getReviews,
  getNearPlaces,
  getIsOfferDataLoaded,
  getIsReviewsDataLoaded,
  getIsNearPlacesDataLoaded
} from '../../../store/data/selectors';

function RoomPageWrapper({offerId}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotel(offerId));
    dispatch(fetchReviwsList(offerId));
    dispatch(fetchNearbyList(offerId));
  }, [offerId]);

  const offer = useSelector(getOffer);
  const reviews = useSelector(getReviews);
  const nearPlaces = useSelector(getNearPlaces);
  const isOfferDataLoaded = useSelector(getIsOfferDataLoaded);
  const isReviewsDataLoaded = useSelector(getIsReviewsDataLoaded);
  const isNearPlacesDataLoaded = useSelector(getIsNearPlacesDataLoaded);

  return (
    <LoadWrapper isLoaded = {isOfferDataLoaded && isReviewsDataLoaded && isNearPlacesDataLoaded}>
      <RoomPage offer = {offer} reviews = {reviews} nearPlaces = {nearPlaces} />
    </LoadWrapper>
  );
}

RoomPageWrapper.propTypes = {
  offerId: PropTypes.string,
};

export default RoomPageWrapper;