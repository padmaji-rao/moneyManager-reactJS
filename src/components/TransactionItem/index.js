import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {title, amount, type, id} = details
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="history-item-container">
      <p className="history-para">{title}</p>
      <p className="history-para">{`Rs ${amount}`}</p>
      <p>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</p>
      <button
        data-testid="delete"
        onClick={onClickDelete}
        type="button"
        className="history-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
