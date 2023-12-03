import styled from "styled-components";
import { mediaRules } from "../../GlobalStyle/GlobalStyle";

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(282px, 344px));
	justify-content: center;
	gap: 20px;
	margin-bottom: 50px;

	@media ${mediaRules.tablet} {
		gap: 16px;
	}

	@media ${mediaRules.desctop} {
		grid-template-columns: repeat(auto-fill, minmax(282px, 282px));
		gap: 29px;
	}
	@media ${mediaRules.large} {
		grid-template-columns: repeat(auto-fill, minmax(282px, 370px));
	}
`;

export const SubTitle = styled.h2`
	margin-bottom: 50px;
	font-size: 40px;
	line-height: 1;
	text-align: center;
`;

export const ButtonGetContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;
