import React, {Component} from 'react';
import FormInput from "../FormInput";
import {Button} from "../Button/Button";

class LoginForm extends Component {
    render() {
        return (
            <form>
                <FormInput
                    name='login'
                    type='text'
                    label='Логин'
                    placeholder='Введите ваш логин'
                />
                <FormInput
                    name='password'
                    type='password'
                    label='Пароль'
                    placeholder='Введите ваш пароль'
                />
                <Button type='submit'>Войти</Button>
            </form>
        );
    }
}

export default LoginForm;