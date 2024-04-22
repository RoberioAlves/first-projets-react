import styled from 'styled-components'
import Background from '../../assests/background.svg'


export const Container = styled.div`
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`;

export const Imagen = styled.img`
    margin-top: 30px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: transparent;
    height: 74px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 1);
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    cursor: pointer;
    padding:20px;
    margin-top: 120px;
    
    &:hover {
        opacity:0.8
    }
    &:active {
        opacity:0.5
    }
    img {
        transform: rotateY(180deg);
    }
`;


export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    padding: 15px 20px 15px 25px;
    border-radius: 14px;
    margin-top: 20px;

    p {
    color: rgba(238, 238, 238, 1);
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    }

    button {
        background: none;
        cursor: pointer;
        border: none;
    }
`;







