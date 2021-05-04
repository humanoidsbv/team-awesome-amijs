import styled from 'styled-components';

export const Header = styled.header`
    background-color: #4f88ef;
    height: ${props => props.isOpen ? '50px' : '100vh'};
    width: 100vw;
    transition: height 0.2s;

    @media screen and (min-width: 1024px) {
        display: flex;
        height: 70px;
        justify-content: space-between;
        align-items: center;
    }
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

    @media screen and (min-width: 1024px) {
    display: none;
    }
`

export const Title = styled.h1`
    color: #ffffff;
    font-family: 'Bello Script';
    font-size: 26px;
    margin: 0;
    padding: 12px 0 70px 0;
    text-align: center;

    @media screen and (min-width: 1024px) {
    display: none;
    }
`;
