import { RECEIVED_MONTHLY_DATA, UPDATE_MONTH_SUCCESS, ADD_EXPENSE_SUCCESS, DELETE_EXPENSE_SUCCESS } from '../actions/actionTypes'

export default function yearlyReducer(state = { month: { expenses: [] } }, action) {
  switch (action.type) {
    case RECEIVED_MONTHLY_DATA:
      return { month: action.data }
    case UPDATE_MONTH_SUCCESS:
      return {
        ...state,
        month: {
          budget: action.data.plan.budget,
          income: action.data.plan.income,
          expenses: state.month.expenses
        }
      }
    case ADD_EXPENSE_SUCCESS:
      return {
        ...state,
        month: {
          budget: state.month.budget,
          income: state.month.income,
          expenses: [...state.month.expenses, action.data]
        }
      }
    case DELETE_EXPENSE_SUCCESS:
      let expenses = state.month.expenses.filter(e => e.id !== action.id)
      return {
        ...state,
        month: {
          budget: state.month.budget,
          income: state.month.income,
          expenses: expenses
        }
      }
    default:
      return state
  }
}
