import React from "react";

import { MainTitle } from "../Title";
import Conta from "../Conta";

const Container = () => {
  return (
    <div className="container">
      <MainTitle>Olá Fulano!</MainTitle>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;
