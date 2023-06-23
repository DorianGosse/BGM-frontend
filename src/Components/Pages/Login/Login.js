import { connect } from "react-redux";
import LoginView from "./LoginView";

const mapStateToProps = (state) => {
    console.log('state',state)
    return {
        loginForm: state.forms.loginForm.values,
        signupForm: state.forms.signupForm.values,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormValue: (form, field, value) => {
            console.log('changeFormValue', form, field, value);
            dispatch({
                type: 'CHANGE_FORM_VALUE',
                form,
                field,
                value
            })
        },
        clearForm: (formName) => {
            dispatch({
                type: 'CLEAR_FORM',
                formName
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);