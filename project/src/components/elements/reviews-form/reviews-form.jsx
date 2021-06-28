import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import RatingList from '../rating-list';
import {createComment} from '../../../store/api-actions';
import { ActionCreator } from '../../../store/action';

function ReviewsForm(props) {
  const {
    id,
    onSubmit,
    newRating,
    newComment,
    setNewComment,
    setNewRating,
  } = props;

  const commentRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(id, {
      comment: newComment,
      rating: newRating,
    });
    setNewComment('');
    setNewRating('');
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
        onChange={() => setNewComment(commentRef.current.value)}
        value={newComment}
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
  onSubmit: PropTypes.func.isRequired,
  newComment: PropTypes.string,
  newRating: PropTypes.string,
  setNewComment: PropTypes.func.isRequired,
  setNewRating: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newComment: state.newComment,
  newRating: state.newRating,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(...data) {
    dispatch(createComment(...data));
  },
  setNewComment(value) {
    dispatch(ActionCreator.setNewComment(value));
  },
  setNewRating(value) {
    dispatch(ActionCreator.setNewRating(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
