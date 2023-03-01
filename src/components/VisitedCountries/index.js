import './index.css'

const VisitedCountries = props => {
  const {visitedDetails, onRemoveCountryItem} = props
  const {id, imageUrl, name} = visitedDetails

  const onClickRemoveButton = () => {
    onRemoveCountryItem(id)
  }

  return (
    <li className="visited-details">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-container">
        <p className="country-name">{name}</p>
        <button
          className="remove-btn"
          type="button"
          onClick={onClickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
