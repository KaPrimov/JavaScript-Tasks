import { RECEIVED_MONTHLY_DATA, UPDATE_MONTH_SUCCESS, ADD_EXPENSE_SUCCESS, DELETE_EXPENSE_SUCCESS } from '../actions/actionTypes'
import { getMonthData, updateMonthData, addExpenseData, deleteExpense } from '../api/remote'
import { messageError, messageReset, messageSuccess } from './authActions'

function fetchMonthDataSuccess(data) {
  return { type: RECEIVED_MONTHLY_DATA, data }
}

function updateMonthSuccess(data) {
  return { type: UPDATE_MONTH_SUCCESS, data }
}

function addExpenseSuccess(data) {
  return { type: ADD_EXPENSE_SUCCESS, data }
}

function deleteExpenseSuccess(id) {
  return { type: DELETE_EXPENSE_SUCCESS, id }
}

export function fetchMonthData(year, month) {
  return async (dispatch) => {
    try {
      const data = await getMonthData(year, month);
      dispatch(fetchMonthDataSuccess(data));
    } catch (error) {
      dispatch(messageError(error))
      dispatch(messageReset())
    }
  }
}
export function updateMonthlyData(year, month, income, budget) {
  return async (dispatch) => {
    try {
      const data = await updateMonthData(year, month, income, budget);
      if (data.success) {
        dispatch(updateMonthSuccess(data));
        dispatch(messageSuccess(data.message))
        dispatch(messageReset())
      } else {
        dispatch(messageError(data.message))
        dispatch(messageReset())
      }
    } catch (error) {
      dispatch(messageError(error))
      dispatch(messageReset())
    }
  };
}

export function addExpenseAction(year, month, expenseData) {
  return async (dispatch) => {
    try {
      const data = await addExpenseData(year, month, expenseData);
      if (data.success) {
        dispatch(addExpenseSuccess(data.expense));
        dispatch(messageSuccess(data.message))
        dispatch(messageReset())
      } else {
        dispatch(messageError(data.message))
        dispatch(messageReset())
      }
    } catch (error) {
      dispatch(messageError(error))
      dispatch(messageReset())
    }
  }
}

export function deleteExpenseAction(id) {
  return async (dispatch) => {
    try {
      const data = await deleteExpense(id);
      if (data.success) {
        dispatch(deleteExpenseSuccess(id));
        dispatch(messageSuccess(data.message))
        dispatch(messageReset())
      } else {
        dispatch(messageError(data.message))
        dispatch(messageReset())
      }
    } catch (error) {
      dispatch(messageError(error))
      dispatch(messageReset())
    }
  }
}
