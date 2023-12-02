import styled from "styled-components";
import { mediaRules } from "../../GlobalStyle/GlobalStyle"

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-height: ${props=> props.maxheight || 'auto'};
	background: ${props => props.background || "#FFF"};
`;

export const ContainerHeader = styled.div`
	min-width: 360px;
	max-width: 1170px;
	width: 100%;
	padding: ${props => props.padding || 0};
	@media ${mediaRules.tablet} {
		padding: ${props => props.paddingTbalet || props.padding};
	}
	@media ${mediaRules.desctop} {
		padding: ${props => props.paddingDesctop || props.paddingTbalet};
	}
	@media ${mediaRules.large} {
		padding: ${props => props.paddingLarge || props.paddingDectop};
	}
`;

export const SectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-height: ${props=> props.maxheight || 'auto'};
	background-color: #F8F8F8;
`;

export const ContainerSection = styled.div`
	min-width: 360px;
	max-width: 1170px;
	width: 100%;
	padding: ${props => props.padding || 0};
	background: ${props => props.background || "#F8F8F8"};
	background-size: cover;
	background-position: center;

	@media ${mediaRules.tablet} {
		padding: ${props => props.paddingTbalet || props.padding};
	}
	@media ${mediaRules.desctop} {
		padding: ${props => props.paddingDectop || props.paddingTbalet};
	}
	@media ${mediaRules.large} {
		padding: ${props => props.paddingLarge || props.paddingDectop};
	}
`