import styled from "styled-components";

export const BotaoComponent = styled.button`
    width: 380px;
    height: 60px;
    border-radius: 40px;
    background-color: red;
    color: white;
    text-align: center;
    @media screen and (max-width: 480px) {
        background-color: green;
    }
`;