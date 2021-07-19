import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import RatingList from '../rating-list/rating-list';

import {createComment} from '../../../store/api-actions';
import {showAlert} from '../../../utils';
import {ErrorMessages} from '../../../const';
import {ReviewSettings} from '../../../settings';

import {getNewRating} from '../../../store/process/selectors';

function ReviewsForm({id}) {
  const dispatch = useDispatch();
  const [isCommentTextValid, setIsCommentTextValid] = useState(false);
  const [isNewCommentDisabled, setNewCommentDisabling] = useState(false);
  const [newComment, setNewComment] = useState('');

  const newRating = useSelector(getNewRating);

  const checkCommentTextValidity = (comment) => (comment.length >= ReviewSettings.MIN_LENGTH && comment.length < ReviewSettings.MAX_LENGTH)
    ? setIsCommentTextValid(true)
    : setIsCommentTextValid(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!newRating.length) {
      showAlert(ErrorMessages.ERROR_RATING_MSG);
      return;
    }

    setNewCommentDisabling(true);
    dispatch(createComment(id, {
      comment: newComment,
      rating: newRating,
    }))
      .then(() => setIsCommentTextValid(false))
      .then(() => setNewComment(''))
      .catch(() => showAlert(ErrorMessages.ERROR_COMMENT_MSG))
      .finally(() => setNewCommentDisabling(false));
  };

  const handleCommentChange = ({target: {value}}) => {
    setNewComment(value);
    checkCommentTextValidity(value);
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit = {handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList isDisabled = {isNewCommentDisabled} />
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={newComment}
        disabled={isNewCommentDisabled}
        minLength={ReviewSettings.MIN_LENGTH}
        maxLength={ReviewSettings.MAX_LENGTH}
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
