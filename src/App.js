import React from "react";

import { GlobalStyle } from "./styles/global";
import Header from "./Components/Header";
import Container from "./Components/Container";

function App() {
  return (
    <>
      <Header />
      <Container />
      <GlobalStyle />
    </>
  );
}

export default App;
