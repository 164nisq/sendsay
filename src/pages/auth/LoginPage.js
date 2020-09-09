import React, {Component} from 'react';
import { Formik } from "formik";
import * as yup  from 'yup'

import LoginForm from "../../components/LoginForm";

const validationSchema = yup.object().shape({
    login: yup.string().required().min(6),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        )
})

class LoginPage extends Component {
    state = {
        formInitialValues: {
            login : '',
            password : ''
        }
    }
    submitHandler = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <Formik initialValues={this.state.formInitialValues}
                    validationSchema={validationSchema}
            >
                <LoginForm/>
            </Formik>
        );
    }
}

export default LoginPage;