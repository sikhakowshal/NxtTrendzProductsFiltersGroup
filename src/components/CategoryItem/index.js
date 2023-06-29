import './index.css'

const CategoryItem = props => {
  const {categoryItem, updateCategoryId} = props
  const {categoryId, name} = categoryItem

  const onClickCategory = () => {
    updateCategoryId(categoryId)
  }

  return (
    <li className="category-item">
      <button type="button" className="category-btn" onClick={onClickCategory}>
        <p className="button-text">{name}</p>
      </button>
    </li>
  )
}

export default CategoryItem
