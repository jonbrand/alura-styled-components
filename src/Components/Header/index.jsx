import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import { HeaderContainer, Logo, BtnHeader } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <BtnHeader href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </HeaderContainer>
  );
};

export default Header;
