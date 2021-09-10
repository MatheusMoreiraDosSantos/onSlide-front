import React from "react";
import BoardProvider from "./contexts/board.js";
import BoardEdit from "./components/BoardEdit";
import BoardLib from "./components/BoardLib";
import BoardView from "./components/BoardView";
import { Container, Footer } from "./styles.js";

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <Container>
          {/* <Footer>
            <p>Lista de cards</p>
            <p>Só você vê isso...</p>
            <p>Em aprensentação no momento...</p>
          </Footer> */}
          <BoardLib />
          <BoardEdit />
          <BoardView />
        </Container>
      </BoardProvider>
    </div>
  );
}

export default App;
