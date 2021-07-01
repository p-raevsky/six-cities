import React, {useRef} from 'react';
import {connect} from 'react-redux';
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

function ReviewsForm(props) {
  const {
    id,
    uploadNewComment,
    newRating,
    newComment,
    setComment,
    setRating,
  } = props;

  const commentRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    uploadNewComment(id, {
      comment: newComment,
      rating: newRating,
    });
    setComment('');
    setRating('');
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
        onChange={() => setComment(commentRef.current.value)}
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
  uploadNewComment: PropTypes.func.isRequired,
  newComment: PropTypes.string,
  newRating: PropTypes.string,
  setComment: PropTypes.func.isRequired,
  setRating: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newComment: getNewComment(state),
  newRating: getNewRating(state),
});

const mapDispatchToProps = (dispatch) => ({
  uploadNewComment(...data) {
    dispatch(createComment(...data));
  },
  setComment(value) {
    dispatch(setNewComment(value));
  },
  setRating(value) {
    dispatch(setNewRating(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
