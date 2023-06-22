import { connect } from "react-redux";
import LoginView from "./LoginView";

const mapStateToProps = (state) => {
    return {
        loginForm: state.forms.loginForm,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormValue: (formName, key, value) => {
            dispatch({
                type: 'CHANGE_FORM_VALUE',
                formName,
                key,
                value
            })
        },
        clearForm: (formName) => {
            dispatch({
                type: 'CLEAR_FORM',
                formName
            })
        },
        addFormError: (formName, key, error) => {
            dispatch({
                type: 'ADD_FORM_ERROR',
                formName,
                key,
                error
            })
        },
        removeFormError: (formName, key) => {
            dispatch({
                type: 'REMOVE_FORM_ERROR',
                formName,
                key
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);