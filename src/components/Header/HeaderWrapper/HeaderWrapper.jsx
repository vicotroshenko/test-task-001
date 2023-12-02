import ButtonPrimery from "../../ButtonPrimery/ButtonPrimery";
import Container from "../../Container/Container";
import Logo from "../Logo/Logo";
import { InnerContainer, ButtonHeaderContainer  } from "./HeaderWrapper.styled";

const HeaderWrapper = () => {
  return (
    <Container 
			elementType={"header"} 
			maxheight={"60px"} 
			padding={"13px 16px"}
			paddingTbalet={"13px 32px"}
			paddingDesctop={"13px 60px"}
			paddingLarge={"13px 0px"}
			>
      <InnerContainer>
        <Logo />
        <ButtonHeaderContainer>
          <ButtonPrimery padding={"4px 29px"}>Users</ButtonPrimery>
          <ButtonPrimery padding={"4px 29px"}>Sign up</ButtonPrimery>
        </ButtonHeaderContainer>
      </InnerContainer>
    </Container>
  );
};

export default HeaderWrapper;
