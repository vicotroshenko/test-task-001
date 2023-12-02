import { Card, Contacts, ImageContainer, LinkCard } from "./EmployeeCard.styled";
import userPhoto from "../../images/png/user1.png";

const EmployeeCard = ({
	image = userPhoto,
	name,
	position,
	email,
	phone,
}) => {
  return (
    <Card>
      <ImageContainer>
        <img src={image} alt={name} />
      </ImageContainer>
      <p>{name}</p>
      <Contacts>
        <p>{position}</p>
        <LinkCard href={`mailto:${email}`}>{email}</LinkCard>
        <LinkCard href={`tel:${phone}`}>{phone}</LinkCard>
      </Contacts>
    </Card>
  );
};

export default EmployeeCard;
