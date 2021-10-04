import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { SignupContainer, SignupTitle } from './signup.styles'

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

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.error(error)
        }
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
export default SignUp