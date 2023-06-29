import './index.css'

const RatingItem = props => {
  const {ratingItem, updateRatingId} = props
  const {ratingId, imageUrl} = ratingItem

  const onClickRatingItem = () => {
    updateRatingId(ratingId)
  }

  return (
    <li className="ratings-item">
      <button className="rating-btn" type="button" onClick={onClickRatingItem}>
        <img src={imageUrl} className="rating-img" alt={`rating ${ratingId}`} />
        <p className="rating-btn-text"> & up</p>
      </button>
    </li>
  )
}

export default RatingItem
