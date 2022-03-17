import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { HeaderContainer, Logo, BtnHeader } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </HeaderContainer>
  );
};

export default Header;
