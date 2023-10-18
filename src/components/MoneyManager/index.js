import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newTransaction = {
      title,
      amount,
      type,
      id: v4(),
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onDelete = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {title, amount, type, transactionList} = this.state

    const incomeList = transactionList.filter(each => each.type === 'INCOME')
    const expenseList = transactionList.filter(each => each.type === 'EXPENSES')
    let totalIncome = 0
    let totalExpenses = 0
    if (incomeList.length > 0) {
      incomeList.forEach(each => {
        totalIncome += parseInt(each.amount)
      })
    }
    if (expenseList.length > 0) {
      expenseList.forEach(each => {
        totalExpenses += parseInt(each.amount)
      })
    }

    console.log(`Total Income :${totalIncome}`)
    console.log(`Total Expenses :${totalExpenses}`)
    console.log(transactionList)
    return (
      <div className="bg-container">
        <div className="profile-container">
          <h1 className="profile-head">Hi, Richard</h1>
          <p className="profile-para">
            Welcome back to your <span className="spanned">Money Manager</span>
          </p>
        </div>
        <MoneyDetails totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <div className="bottom-container">
          <div className="transaction-container">
            <h1 className="trans-head">Add Transaction</h1>
            <form className="form-container" onSubmit={this.onAddTransaction}>
              <label className="trans-label" htmlFor="title">
                TITLE
              </label>
              <input
                onChange={this.onChangeTitle}
                value={title}
                className="trans-input"
                placeholder="TITLE"
                id="title"
              />
              <label className="trans-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                onChange={this.onChangeAmount}
                value={amount}
                className="trans-input"
                placeholder="AMOUNT"
                id="amount"
              />
              <label className="trans-label" htmlFor="type">
                TYPE
              </label>
              <select
                onChange={this.onChangeType}
                className="trans-input"
                id="type"
                value={type}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  Income
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  Expenses
                </option>
              </select>
              <button type="submit" className="trans-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="trans-head">History</h1>
            <div className="overall-head-container">
              <div className="head-container">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
            </div>
            <ul className="list-container">
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  onDelete={this.onDelete}
                  details={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
