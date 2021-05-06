import styled from "styled-components";

export const PageContainer = styled.div`
  overflow-y: ${(props) => (props.isOpen ? "visible" : "hidden")};
  height: 100vh;
`;
