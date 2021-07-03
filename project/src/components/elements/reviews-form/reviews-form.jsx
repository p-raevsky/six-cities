import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import RatingList from '../rating-list';
import {createComment} from '../../../store/api-actions';
import {
  setNewComment,
  setNewRating
} from '../../../store/action';
import {
  getNewRating,
  getNewComment
} from '../../../store/process/selectors';

const MAX_LENGTH = 50;
function ReviewsForm({id}) {
  const commentRef = useRef();
  const dispatch = useDispatch();

  const newComment = useSelector(getNewComment);
  const newRating = useSelector(getNewRating);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(createComment(id, {
      comment: newComment,
      rating: newRating,
    }));
    dispatch(setNewComment(''));
    dispatch(setNewRating(''));
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit = {handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList />
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}
        onChange={() => dispatch(setNewComment(commentRef.current.value))}
        value={newComment}
        maxLength={MAX_LENGTH}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  id: PropTypes.number,
};

export default ReviewsForm;
