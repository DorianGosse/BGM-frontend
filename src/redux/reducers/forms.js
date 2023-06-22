import * as actions from '../actions';
import { omit } from 'lodash';

const defaultFormValues = {
    loginForm: {
        email: '',
        password: ''
    },
    signupForm: {
        email: '',
        password: '',
        confirmPassword: ''
    }
}

export default (state = {
    loginForm: {
        values: defaultFormValues.loginForm,
        errors: {}
    },
    signupForm: {
        values: defaultFormValues.signupForm,
        errors: {}
    }
}, action) => {
    switch (action.type) {
        case actions.CHANGE_FORM_VALUE:
            return {
                ...state,
                [action.formName]: {
                    ...state[action.formName],
                    [action.key]: action.value
                }
            }
        case actions.CLEAR_FORM:
            return {
                ...state,
                [action.formName]: defaultFormValues[action.formName]
            }
        case actions.ADD_FORM_ERROR:
            return {
                ...state,
                [action.formName]: {
                    ...state[action.formName],
                    errors: {
                        ...state[action.formName].errors,
                        [action.key]: action.error
                    }
                }
            }
        case actions.REMOVE_FORM_ERROR:
            return {
                ...state,
                [action.formName]: {
                    ...state[action.formName],
                    errors: omit(state[action.formName].errors, action.key)
                }
            }
        default:
            return state
    }
}