import styled from "styled-components";

export const SearchBar = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    border: ${({ theme }) => theme.borderPrimary};
    display: flex;
    height: 70px;
    justify-content: space-between;
    padding: 0 32px;
  }
`;

export const PageTitle = styled.p`
  font-size: 18px;
  color: #354052;

  > span {
    font-size: 14px;
    color: #7f8fa4;
    border-left: ${({ theme }) => theme.borderPrimary};
    padding-left: 12px;
    margin-left: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  > svg {
    position: absolute;
    right: 45px;
  }
`;

export const FilterOption = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const FilterButton = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: ${(props) => (props.isListVisible ? "4px 4px 0 0" : "4px")};
  border: ${({ theme }) => theme.borderPrimary};
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
  display: ${(props) => (props.isListVisible ? "block" : "none")};
  border-radius: 0 0 4px 4px;
  border: ${({ theme }) => theme.borderPrimary};
  border-top: none;
  color: #7f8fa4;
  background-color: #ffffff;
  position: absolute;
  width: 200px;

  > li {
    font-size: 14px;
    list-style: none;
    border-bottom: ${({ theme }) => theme.borderPrimary};
    background-color: #ffffff;
    cursor: pointer;

    :last-child {
      border-top: 2px solid black;
      border-bottom: none;
      text-align: center;
    }

    > button {
      padding: 10px 14px;
      margin: 0;
      border: 0;
      background-color: transparent;
      font: inherit;
      color: inherit;
    }
  }
`;

export const SearchField = styled.input`
  border-radius: 4px;
  border: ${({ theme }) => theme.borderPrimary};
  color: #354052;
  height: 36px;
  margin: 0 0 0 10px;
  padding: 0 14px;
  width: 270px;
`;
