import styled from 'styled-components';

export const NavList = styled.ul`
  align-content: flex-start;
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  background-color: ${props => props.active ? '#1166a5' : 'rgba(0, 0, 0, 0)'};
  border-radius: ${props => props.active ? '4px' : '0'};

  margin: 43px 0 0 0;
  padding: 5px 10px; 
  &:first-child {
    margin: 0;
  }
`;
