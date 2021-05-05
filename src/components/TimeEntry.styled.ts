import styled from "styled-components";

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
  margin: 16px 16px 0 16px;
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
        margin: 0 16px;
    `}

    ${(props) =>
    props.lastEntry &&
    `
        border-radius: 0 0 4px 4px;
        margin-top: 0;
    `}
`;
