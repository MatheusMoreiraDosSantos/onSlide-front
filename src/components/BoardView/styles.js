import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border-left: 1px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
