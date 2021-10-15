import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { signupStart } from '../../redux/user/user.actions'

import { SignupContainer, SignupTitle } from './signup.styles'
import { connect } from 'react-redux'

class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { signupStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        } 

        signupStart({ displayName, email, password })
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <SignupContainer>
                <SignupTitle>I don't have an account</ SignupTitle>
                <span>Sign up with your email and password</span>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        placeholder='Display Name'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required/>
                    <FormInput
                        type='email'
                        name='email'
                        placeholder='eMail'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required/>
                    <FormInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required/>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </ SignupContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signupStart: user => dispatch(signupStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)