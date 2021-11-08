import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.actions'
import { ButtonsContainer, SigninContainer, SigninTitle } from './signin.styles'
const Signin = ({ emailSigninStart, googleSigninStart }) => {
    const [user, setUser] = useState({ email: '', password: '' })

    const { email, password } = user
    const handleSubmit = async event => {
        event.preventDefault()

        emailSigninStart(email, password)
    }
    const handleChange = event => {
        const{ value, name } = event.target

        setUser({ ...user, [name]: value })
    }

        return(
            <SigninContainer>
                <SigninTitle>I already have an account</SigninTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        placeholder='eMail'
                        value={email} 
                        handleChange={handleChange} 
                        label='email'
                        required 
                        />
                    <FormInput 
                        name="password" 
                        type='password' 
                        placeholder='Password'
                        value={password}
                        handleChange={handleChange} 
                        label='password'
                        required 
                        />
                    <ButtonsContainer>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={googleSigninStart} isGoogleSignin> Sign In With Google </CustomButton>
                    </ButtonsContainer>
                </form>
            </ SigninContainer>
        )
    }

const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(Signin)