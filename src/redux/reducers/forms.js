import * as actions from '../actions'
import { omit } from 'lodash'

const formDefaultValues = {
  signupForm: {
    email: '',
    password: ''
  },
  loginForm: {
    email: '',
    password: '',
    confirmPassword: ''
  }
}

const forms = (state = {
  signupForm: {
    values: formDefaultValues.signupForm,
    errors: {}
  },
  loginForm: {
    values: formDefaultValues.loginForm,
    errors: {}
  }
}, action) => {
  switch (action.type) {
    case actions.CHANGE_FORM_VALUE:
      return Object.assign({}, state, {
        [action.form]: {
          values: {
            ...state[action.form].values,
            [action.field]: action.value
          },
          errors: state[action.form].errors
        }
      })
    case actions.CLEAR_FORM:
      return Object.assign({}, state, {
        [action.form]: {
          values: formDefaultValues[action.form],
          errors: {}
        }
      })
    case actions.ADD_FORM_ERROR:
      return Object.assign({}, state, {
        [action.form]: {
          values: state[action.form].values,
          errors: {
            ...state[action.form].errors,
            [action.field]: action.error
          }
        }
      })
    case actions.REMOVE_FORM_ERROR:
      if (state[action.form].errors[action.field]) {
        return Object.assign({}, state, {
          [action.form]: {
            values: state[action.form].values,
            errors: omit(state[action.form].errors, action.field)
          }
        })
      } else {
        return state 
      }
    default: return state
  }
}

export default forms;
