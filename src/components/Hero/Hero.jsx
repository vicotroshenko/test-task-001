import Container from "../Container/Container";
import heroImage from "../../images/jpg/hero-image.jpg";
import { InnerContainer, Title, Text } from "./Hero.styled";
import ButtonPrimery from "../ButtonPrimery/ButtonPrimery";

const Hero = () => {
  return (
    <Container
      elementType={"section"}
      padding={"40px 16px 71px 16px"}
      paddingTbalet={"89px 16px 88px 16px"}
      paddingDesctop={"164px 16px 163px 16px"}
      background={`linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${heroImage}) lightgray -1270.215px -412.112px / 342.315% 164.03% no-repeat`}
    >
      <InnerContainer>
        <Title>Test assignment for front-end developer</Title>
        <Text>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <ButtonPrimery padding={"4px 29px"}>Sign up</ButtonPrimery>
      </InnerContainer>
    </Container>
  );
};

export default Hero;
