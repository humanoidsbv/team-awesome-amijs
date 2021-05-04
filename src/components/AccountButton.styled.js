import styled from 'styled-components';

export const AccountWrapper = styled.div`
    display: none;
    
    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        margin: 0 30px 0 0;

        &:hover {
            cursor: pointer;
        }
    }
`

export const AccountButton = styled.div`
    @media screen and (min-width: 1024px) {
        align-items: center;
        background-color: #ffffff;
        border-radius: 18px;
        display: flex;
        height: 36px;
        justify-content: space-between;
        width: 135px;

        > svg {
            height: 10px;
            width: 75px;
            margin: 0 0 0 12px;
        }
    }
`

export const AccountPicture = styled.img`
    @media screen and (min-width: 1024px) {
        border-radius: 16px;
        height: 32px;
        width: 32px;
        margin: 0 2px 0 0;
    }
`

export const AccountArrow = styled.div`
    @media screen and (min-width: 1024px) {
        border-radius: 0.5px;
        margin: 0 0 0 10px;
    }
`
