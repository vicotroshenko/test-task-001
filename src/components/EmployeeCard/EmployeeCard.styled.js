import styled from "styled-components";

export const Card = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	row-gap: 20px;
	max-width: 370px;
	min-height: 254px;
	padding: 20px;
	border-radius: 10px;
	background: #FFF;
	line-height: 1.625;
`;

export const ImageContainer = styled.div`
	border-radius: 50%;
	overflow: hidden;
`;

export const LinkCard = styled.a`
	text-decoration: none;
	color: rgba(0, 0, 0, 0.87);
	transition: all 250ms linear;

	&:hover {
		text-decoration: underline;
		color: #00BDD3;
	}
	
	&:focus {
		text-decoration: underline;
		color: #00BDD3;
	}
`;

export const Contacts = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;
