import React from 'react'

import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'
import { SigninAndSignupContainer } from './signin-and-signup.styles'

const SigninAndSignupPage = () => (
    <SigninAndSignupContainer><Signin /><Signup /></ SigninAndSignupContainer>
)
export default SigninAndSignupPage