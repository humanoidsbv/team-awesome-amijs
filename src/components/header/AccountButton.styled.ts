import styled from "styled-components";

export const AccountWrapper = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin: 0 30px 0 0;
  }
`;

export const AccountButton = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 18px;
  display: flex;
  height: 36px;
  justify-content: space-between;
  width: 135px;

  > svg {
    height: 10px;
    margin: 0 0 0 12px;
    width: 75px;
  }
`;

export const AccountPicture = styled.img`
  border-radius: 16px;
  height: 32px;
  margin: 0 2px 0 0;
  width: 32px;
`;

export const AccountArrow = styled.div`
  border-radius: 0.5px;
  margin: 0 0 0 10px;
`;
