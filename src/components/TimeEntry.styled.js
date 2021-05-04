import styled from 'styled-components';

export const EntryWrapper = styled.div`
    margin: 32px 16px 0 16px;

    &:last-child {
        margin: 32px 16px;
    }
`

export const Entry = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #e6eaee;
    border-left: solid 4px #4f88ef;
    display: flex;
    font-size: 16px;
    height: 82px;
    justify-content: space-between;
    padding: 0 16px;
`

export const EntryDate = styled.div`
    font-size: 16px;
    color: #7f8fa4;
`