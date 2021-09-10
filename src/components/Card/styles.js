import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 8px;
  box-shadow: 9px 13px 19px 2px rgba(0, 0, 0, 0.53);
  font-family: "Varela Round";
  font-weight: 800;
  font-size: 18px;
`;

export const CardLib = styled.button`
  height: 100%;
  min-height: 50px;
  :active {
    color: #eee;
    background-color: #222;
  }
`;

export const CardEdit = styled.div`
  width: 35vw;
  height: 100%;
  min-height: 300px;
  padding: 8px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  margin: 3px;
  background-color: ${(props) => props.cor};
  :active {
    color: #eee;
    background-color: #222;
  }
`;

export const CardApresentation = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.selected ? "#fff" : "transparent")};
  button {
    background-color: ${(props) => (props.selected ? "#222" : "#eee")};
    color: ${(props) => (props.selected ? "#eee" : "#222")};
    :active {
      background-color: ${(props) => (props.selected ? "#eee" : "#222")};
      color: ${(props) => (props.selected ? "#222" : "#eee")};
    }
  }
  p {
    margin: 4px;
  }
`;
