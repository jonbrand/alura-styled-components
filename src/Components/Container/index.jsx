import React from "react";

import { MainTitle } from "../Title";
import { Account } from "../Account";
import { Content, MainContainer } from "./styles";

const Container = () => {
  return (
    <MainContainer>
      <MainTitle>Olá Fulano!</MainTitle>
      <Content>
        <Account />
      </Content>
    </MainContainer>
  );
};

export default Container;
