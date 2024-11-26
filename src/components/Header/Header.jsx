import React from "react";
import * as S from "./Header.style";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo
          src={Logo}
          alt='logo'
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
