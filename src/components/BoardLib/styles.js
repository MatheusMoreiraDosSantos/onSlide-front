import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  border-right: 1px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
