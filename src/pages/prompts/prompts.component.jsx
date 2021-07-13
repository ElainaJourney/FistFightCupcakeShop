import React from 'react';
import PROMPT_DATA from './prompts.data';

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
        <h1>Let's do art!</h1>
    </div>)
    }
    
};

export default ArtPrompts;