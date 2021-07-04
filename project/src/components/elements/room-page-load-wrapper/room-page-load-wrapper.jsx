import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import RoomPage from '../../pages/room-page';
import LoadWrapper from '../load-wrapper';

import {fetchHotel} from '../../../store/api-actions';
import {
  getOffer,
  getIsOfferDataLoaded
} from '../../../store/data/selectors';

function RoomPageLoadWrapper({offerId}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotel(offerId));
  }, [offerId]);

  const offer = useSelector(getOffer);
  const isOfferDataLoaded = useSelector(getIsOfferDataLoaded);

  return (
    <LoadWrapper isLoaded = {isOfferDataLoaded}>
      <RoomPage offer = {offer} />
    </LoadWrapper>
  );
}

RoomPageLoadWrapper.propTypes = {
  offerId: PropTypes.string,
};

export default RoomPageLoadWrapper;
