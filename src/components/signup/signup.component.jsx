import React from 'react'
import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { signupStart } from '../../redux/user/user.actions'

import { SignupContainer, SignupTitle } from './signup.styles'
import { connect } from 'react-redux'

const SignUp = ({ signupStart }) => {
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = user
    const handleSubmit = async event => {
        event.preventDefault()

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        } 

        signupStart({ displayName, email, password })
    }
    const handleChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
        return(
            <SignupContainer>
                <SignupTitle>I don't have an account</ SignupTitle>
                <span>Sign up with your email and password</span>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        placeholder='Display Name'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required/>
                    <FormInput
                        type='email'
                        name='email'
                        placeholder='eMail'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required/>
                    <FormInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required/>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </ SignupContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    signupStart: user => dispatch(signupStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)