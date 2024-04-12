import styled from 'styled-components'
import Background from './assests/background1.svg'


export const Container = styled.div`
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const Imagen = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    width: 414px;
    height: 645px;
    top: 251px;
    gap: 0px;
    border-radius: 61px 61px 0px 0px;
    opacity: 0px;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;

`;

export const InputLabel = styled.p`
color: rgba(238, 238, 238, 1);
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
text-align: left;
margin-left: 20px;
margin-bottom: 2px;


`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    padding: 15px 20px 15px 25px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    margin-bottom: 34px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 1);
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    text-align: left;

`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: rgba(0, 0, 0, 0.8);
    width: 342px;
    height: 74px;
    border-radius: 14px;
    border: none;
    color: rgba(255, 255, 255, 1);
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    cursor: pointer;
    padding:20px;
    
    &:hover {
        opacity:0.8
    }
    &:active {
        opacity:0.5
    }
`;
export const H1 = styled.h1`
    color: rgba(255, 255, 255, 1);
    margin-bottom: 80px;
    text-align: center;
    font-size: 34px;
    font-weight: 700;
    line-height: 39.84px;
    text-align: center;
    
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







