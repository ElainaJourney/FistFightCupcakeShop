import React from 'react';
import PROMPT_DATA from './prompts.data';

import CustomButton from '../../components/custom-button/custom-button.component';

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
        <div className='homepage'>
            {`${options.blanks[Math.floor(Math.random()*options.blanks.length)]}`}
            <CustomButton onClick={() => window.location.reload(false)}>Let's do art!</CustomButton>
        </div>)
    }
    
};

export default ArtPrompts;