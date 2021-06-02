import styled from "styled-components";

export const SearchBar = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    border: ${({ theme }) => theme.borderLightGrey};
    display: flex;
    height: 70px;
    justify-content: space-between;
    padding: 0 32px;
  }
`;

export const PageTitle = styled.h1`
  color: #354052;
  font-size: 18px;

  > span {
    border-left: ${({ theme }) => theme.borderLightGrey};
    color: #7f8fa4;
    font-size: 14px;
    margin-left: 12px;
    padding-left: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;

  > svg {
    position: absolute;
    right: 45px;
  }
`;

export const FilterOption = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const FilterButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border-radius: ${(props) => (props.isListVisible ? "4px 4px 0 0" : "4px")};
  border: ${({ theme }) => theme.borderLightGrey};
  color: #7f8fa4;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 36px;
  justify-content: space-between;
  padding: 0 14px;
  width: 200px;

  > svg {
    fill: #7f8fa4;
  }
`;

export const ClientList = styled.div`
  background-color: #ffffff;
  border-radius: 0 0 4px 4px;
  border: ${({ theme }) => theme.borderLightGrey};
  border-top: none;
  color: #7f8fa4;
  display: ${(props) => (props.isListVisible ? "block" : "none")};
  position: absolute;
  width: 200px;

  > li {
    background-color: #ffffff;
    border-bottom: ${({ theme }) => theme.borderLightGrey};
    font-size: 14px;
    list-style: none;

    :last-child {
      border-bottom: none;
      border-top: 2px solid black;
      text-align: center;
    }

    > button {
      background-color: transparent;
      border: 0;
      color: inherit;
      cursor: pointer;
      font: inherit;
      margin: 0;
      padding: 10px 14px;
    }
  }
`;

export const SearchField = styled.input`
  border-radius: 4px;
  border: ${({ theme }) => theme.borderLightGrey};
  color: #354052;
  height: 36px;
  margin: 0 0 0 10px;
  padding: 0 14px;
  width: 270px;
`;
