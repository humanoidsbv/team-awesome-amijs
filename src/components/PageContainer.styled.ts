import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  overflow-y: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const TimeEntryWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
