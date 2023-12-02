import styled from "styled-components";

export const Button = styled.button`
	padding: ${props => props.padding || 0};
	background-color: #F4E041;
	border: none;
	border-radius: 80px;

	font-size: 16px;
	line-height: 1.625;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.87);
	cursor: pointer;
	transition: all 250ms linear;

	&:hover{
		background-color: #FFE302;
	}

	&:focus{
		background-color: #FFE302;
	}

	&:disabled {
		background-color: #B4B4B4;
		color: rgba(255, 255, 255, 0.87);
	}
`;

