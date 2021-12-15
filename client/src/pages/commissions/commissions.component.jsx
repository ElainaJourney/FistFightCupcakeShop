import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import { CommissionsContainer, CustomTextArea, InputField } from './commissions.styles'
import CustomButton from '../../components/custom-button/custom-button.component'

const CommissionsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_9lep5vd';
            const templateId = 'template_3590jei';
            const userId = 'user_gZPTDFzpXr3Curu16Vxe7';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <CommissionsContainer>
            <InputField type="text" placeholder="What's your name?" value={name} onChange={e => setName(e.target.value)} />
            <InputField type="email" placeholder="What's your email address?" value={email} onChange={e => setEmail(e.target.value)} />
            <CustomTextArea placeholder="Describe what you are looking for and in what format you would prefer." value={message} onChange={e => setMessage(e.target.value)}></CustomTextArea>
            <CustomButton onClick={submit}>Request a quote!</CustomButton>
            <div style={emailSent ? {display:'block'} : {display:'none'}}>Thank you for your request, I will be in touch in no time!</div>
        </CommissionsContainer>
    )
}

export default CommissionsForm