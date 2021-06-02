import styled from "styled-components";

export const Entry = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  border: ${({ theme }) => theme.borderLightGrey};
  border-left: solid 4px #4f88ef;
  display: flex;
  font-size: 16px;
  height: 82px;
  justify-content: space-between;
  padding: 0 16px;

  ${(props) =>
    props.firstEntry &&
    `
      border-bottom: none;
      border-radius: 4px 4px 0 0;
    `}

  ${(props) =>
    props.middleEntry &&
    `
      border-bottom: none;
      border-radius: 0;
    `}

  ${(props) =>
    props.lastEntry &&
    `
      border-radius: 0 0 4px 4px;
      margin-top: 0;
    `}
`;

export const ClientWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const DeleteButton = styled.button`
  align-items: center;
  background-color: #fb6375;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  margin: 0 0 0 32px;
  padding: 6px 7px 7px;

  svg {
    box-sizing: content-box;
    padding: 0 5px 0 0;
  }
`;

export const Timestamp = styled.p`
  margin-left: auto;
`;
