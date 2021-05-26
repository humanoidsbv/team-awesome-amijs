import styled from "styled-components";

export const TimeEntries = styled.div`
  max-width: 1170px;
  padding: 0 16px 32px 16px;

  @media screen and (${({ theme }) => theme.desktop}) {
    width: calc(100% - 32px);
    padding: 0 0 32px 0;
  }
`;
