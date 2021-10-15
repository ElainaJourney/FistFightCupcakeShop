import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.actions'
import { ButtonsContainer, SigninContainer, SigninTitle } from './signin.styles'
class Signin extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { emailSigninStart } = this.props
        const { email, password } = this.state

        emailSigninStart(email, password)
    }
    handleChange = event => {
        const{ value, name } = event.target

        this.setState({ [name]: value })
    }

    render(){
        const { googleSigninStart } = this.props
        return(
            <SigninContainer>
                <SigninTitle>I already have an account</SigninTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        placeholder='eMail'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                        />
                    <FormInput 
                        name="password" 
                        type='password' 
                        placeholder='Password'
                        value={this.state.password}
                        handleChange={this.handleChange} 
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
}

const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(Signin)