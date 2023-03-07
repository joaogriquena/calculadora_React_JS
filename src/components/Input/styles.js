import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 100p%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 2px;

    font-size: 24px;
    font-family: 'Roboto', sans-serif;

    input{
        width: 100%;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.6);
        border: 0;
        outline: none;
        border-radius: 2px;
       
        text-align: right;
        word-spacing: -10px;
        padding: 0 20px;
       
        font-size: 40px;
        font-family: 'Roboto', sans-serif;
        color: #FFF;
        
    }
`