import styled from 'styled-components'

export const CommissionsContainer = styled.div`
    width: 98vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    
    button{
        min-width: 400px;
        border-radius: 10px;
    }
    h1 {
        font-size: 45px;
        padding: 20px;
    }
    h1::first-letter {
        text-transform: capitalize;
    }
`

export const InputField = styled.input`
    font-size: 25px;
    width: 400px;
    border-radius: 10px;
`

export const CustomTextArea = styled.textarea`
    font-size: 18px;
    min-width: 400px;
    min-height: 250px;
    border-radius: 10px;
`