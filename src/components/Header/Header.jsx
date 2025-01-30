import * as S from "./Header.style";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo
          src={Logo}
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
