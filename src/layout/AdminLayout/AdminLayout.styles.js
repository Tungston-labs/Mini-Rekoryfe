import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  /* padding: 20px; */
  background: white;
  font-family: "Ubuntu", sans-serif;
  overflow-y: auto;
`;
