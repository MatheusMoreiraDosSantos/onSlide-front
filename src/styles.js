import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 40%;
`;

export const Footer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  color: var(--title);
  background-color: #fff;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  opacity: 0.9;
  margin-top: 50px;
  p {
    padding: 20px;
  }
`;
