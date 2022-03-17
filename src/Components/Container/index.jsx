import React from "react";

import { MainTitle } from "../Title";
import { Account } from "../Account";
import { Content, MainContainer } from "./styles";
import { Statement } from "../Statement";

const Container = () => {
  return (
    <MainContainer>
      <MainTitle>Olá Fulano!</MainTitle>
      <Content>
        <Account />
        <Statement />
      </Content>
    </MainContainer>
  );
};

export default Container;
