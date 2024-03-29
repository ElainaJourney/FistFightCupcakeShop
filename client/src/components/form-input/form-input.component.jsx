import React from 'react'
import { FormInputContainer, FormInputLabel, GroupContainer } from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
            (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}`}>

            </ FormInputLabel>)
            :null
        }
    </ GroupContainer>
)
export default FormInput