import Container from "../Container/Container";
import stuffList from "../../data/stuff.json";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { List, SubTitle, ButtonGetContainer } from "./GetWorking.styled";
import { nanoid } from "nanoid";
import ButtonPrimery from "../ButtonPrimery/ButtonPrimery";

const GetWorking = () => {
  return (
    <Container
      elementType={"section"}
      padding={"140px 16px 70px 16px"}
      paddingTbalet={"140px 32px 70px 32px"}
      paddingDesctop={"140px 60px 70px 60px"}
      paddingLarge={"140px 0px 70px 0px"}
    >
			<SubTitle>Working with GET request</SubTitle>
      <List>
        {stuffList.map((item) => (
          <EmployeeCard {...item} key={nanoid()}/>
        ))}
      </List>
			<ButtonGetContainer>
				<ButtonPrimery padding={"4px 19px"}>Show more</ButtonPrimery>
			</ButtonGetContainer>
    </Container>
  );
};

export default GetWorking;
