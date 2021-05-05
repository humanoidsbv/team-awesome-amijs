import styled from "styled-components";

export const NavList = styled.ul`
  align-content: flex-start;
  align-items: center;
  color: #ffffff;
  display: ${(props) => (props.isOpen ? "none" : "flex")};
  flex-direction: column;
  font-size: 24px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    height: 70px;
  }
`;

export const ListItem = styled.li`
  background-color: ${(props) => (props.active ? "#1166a5" : "transparent")};
  border-radius: ${(props) => (props.active ? "4px" : "0")};
  margin: 43px 0 0 0;
  padding: 5px 10px;

  &:first-child {
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 0 14px;
    padding: 7px 18px;

    &:hover {
      cursor: pointer;
    }

    &:first-child {
      margin: 0 0 0 12px;
    }
  }
`;
