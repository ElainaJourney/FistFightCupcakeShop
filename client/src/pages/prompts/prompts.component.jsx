import React from 'react';
import PROMPT_DATA from './prompts.data';

import CustomButton from '../../components/custom-button/custom-button.component';
import { PromptContainer } from './prompts.styles';

class ArtPrompts extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            options: PROMPT_DATA
        }
    }
    render(){
        const {options} = this.state
        return (
        <PromptContainer>
            <h1>{`${options.blanks[Math.floor(Math.random()*options.blanks.length)]}!`}</h1>
            <CustomButton onClick={() => window.location.reload(false)}>Let's do art!</CustomButton>
        </PromptContainer>)
    }
    
};

export default ArtPrompts;