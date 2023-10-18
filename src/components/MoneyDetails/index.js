import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props

  return (
    <div className="bie-container">
      <div className="bie-card-container balance-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="bie-logo"
        />
        <div className="bie-inner-card">
          <p className="bie-head">Your Balance</p>
          <p data-testid="balanceAmount" className="bie-para">{`Rs ${
            totalIncome - totalExpenses
          }`}</p>
        </div>
      </div>
      <div className="bie-card-container income-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="bie-logo"
        />
        <div className="bie-inner-card">
          <p className="bie-head">Your Income</p>
          <p
            data-testid="incomeAmount"
            className="bie-para"
          >{`Rs ${totalIncome}`}</p>
        </div>
      </div>
      <div className="bie-card-container expenses-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="bie-logo"
        />
        <div className="bie-inner-card">
          <p className="bie-head">Your Expenses</p>
          <p
            data-testid="expensesAmount"
            className="bie-para"
          >{`Rs ${totalExpenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
