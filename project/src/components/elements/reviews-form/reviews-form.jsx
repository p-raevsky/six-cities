import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import RatingList from '../rating-list';

import {createComment} from '../../../store/api-actions';
import {showAlert} from '../../../utils';

import {
  setNewComment,
  setNewCommentDisabling,
  setIsCommentTextValid
} from '../../../store/action';
import {
  getNewRating,
  getNewComment,
  getIsNewCommentDisabled,
  getIsCommentTextValid
} from '../../../store/process/selectors';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;
const ERROR_MSG = 'Rating is required';
function ReviewsForm({id}) {
  const dispatch = useDispatch();

  const newRating = useSelector(getNewRating);
  const newComment = useSelector(getNewComment);
  const isNewCommentDisabled = useSelector(getIsNewCommentDisabled);
  const isCommentTextValid = useSelector(getIsCommentTextValid);

  const checkCommentTextValidity = (comment) => (comment.length >= MIN_LENGTH && comment.length < MAX_LENGTH)
    ? dispatch(setIsCommentTextValid(true))
    : dispatch(setIsCommentTextValid(false));

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!newRating.length) {
      showAlert(ERROR_MSG);
      return;
    }

    dispatch(setNewCommentDisabling(true));
    dispatch(createComment(id, {
      comment: newComment,
      rating: newRating,
    }));
  };

  const handleCommentChange = ({target: {value}}) => {
    dispatch(setNewComment(value));
    checkCommentTextValidity(value);
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit = {handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList />
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={newComment}
        disabled={isNewCommentDisabled}
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isCommentTextValid || isNewCommentDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  id: PropTypes.number,
};

export default ReviewsForm;
