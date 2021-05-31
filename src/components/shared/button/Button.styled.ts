import styled from "styled-components";

export const Primary = styled.button`
  align-items: center;
  background-color: #35ac45;
  border-radius: 4px;
  border: ${({ theme }) => theme.borderGreen};
  color: #fff;
  cursor: pointer;
  display: ${(props) => (props.isFormVisible ? "none" : "flex")};
  font-family: ProximaNova;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  min-width: 100px;
  padding: 0 20px;

  :first-of-type,
  :last-of-type {
    margin-right: 12px;
  }

  > svg {
    margin: 0 15px 0 0;
  }
`;

export const Secondary = styled(Primary)`
  background-color: #f5f7f9;
  border: solid 1px #ced0da;
  color: #4b5464;
`;
