import CategoryItem from '../CategoryItem'

import RatingItem from '../RatingItem'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateProductsList,
    updateCategoryId,
    updateRatingId,
    resetFilters,
    searchInputValue,
  } = props

  const onChangeSearchInput = event => {
    updateProductsList(event.target.value)
  }

  const onClickClearFilters = () => {
    resetFilters()
  }

  return (
    <div className="filters-group-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        value={searchInputValue}
      />
      <div className="categories-section">
        <h4 className="category-title">Category</h4>
        <ul className="categories-list">
          {categoryOptions.map(category => (
            <CategoryItem
              categoryItem={category}
              key={category.categoryId}
              updateCategoryId={updateCategoryId}
            />
          ))}
        </ul>
      </div>

      <div className="ratings-section">
        <h4 className="ratings-title">Rating</h4>
        <ul className="ratings-container">
          {ratingsList.map(eachRating => (
            <RatingItem
              key={eachRating.ratingId}
              ratingItem={eachRating}
              updateRatingId={updateRatingId}
            />
          ))}
        </ul>
      </div>
      <button
        className="clear-filters-btn"
        type="button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
