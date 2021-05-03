import styled from 'styled-components';

export const Header = styled.header`
    background-color: #4f88ef;
    height: ${props => props.isOpen ? '50px' : '100vh'};
    width: 100vw;
    transition: height 0.2s;
`;

export const Button = styled.button`
    background: rgba(0, 0, 0, 0);
    border: none;
    height: 20px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
`

export const Cross = styled.img`
    display: ${props => props.isOpen ? 'none' : 'block'};
`

export const Hamburger = styled.img` 
    display: ${props => props.isOpen ? 'block' : 'none'};
`

export const Title = styled.h1`
    color: #ffffff;
    font-family: 'Bello Script';
    font-size: 26px;
    margin: 0;
    padding: 12px 0 70px 0;
    text-align: center;
`;
