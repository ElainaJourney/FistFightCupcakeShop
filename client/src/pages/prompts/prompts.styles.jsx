import styled from 'styled-components'

export const PromptContainer = styled.div`
    width: 98vw;
    padding-top: 30vh;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    h1 {
        font-size: 45px;
        padding: 20px;
    }
    h1::first-letter {
        text-transform: capitalize;
    }
`