import styled from "styled-components";

export const TeamMembers = styled.div`
  max-width: 1170px;
  padding: 32px 16px;

  @media screen and (${({ theme }) => theme.desktop}) {
    padding: 32px 0;
    width: calc(100% - 32px);
  }
`;
