import React from "react";
import * as S from "./Header.style";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <S.Container>
      <div>
        <S.Logo
          src={Logo}
          alt='logo'
        />
      </div>
      <S.MenuBox>
        <S.Menu>Menu 1</S.Menu>
        <S.Menu>Menu 2</S.Menu>
      </S.MenuBox>
    </S.Container>
  );
};

export default Header;
