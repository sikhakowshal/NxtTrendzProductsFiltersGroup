import {Component} from 'react'

import CategoryItem from '../CategoryItem'
import RatingItem from '../RatingItem'

import './index.css'

class FiltersGroup extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onKeyDownEvent = event => {
    const {searchInput} = this.state
    const {updateSearchInputValue} = this.props

    if (event.key === 'Enter') {
      updateSearchInputValue(searchInput)
    }
  }

  onClickClearFilters = () => {
    const {resetFilters} = this.props
    resetFilters()
  }

  render() {
    const {searchInput} = this.state

    const {
      categoryOptions,
      ratingsList,
      updateCategoryId,
      updateRatingId,
    } = this.props

    return (
      <div className="filters-group-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onKeyDown={this.onKeyDownEvent}
          onChange={this.onChangeSearchInput}
          value={searchInput}
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
          onClick={this.onClickClearFilters}
        >
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
