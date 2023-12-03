import styled from "styled-components";

export const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	color: #fff;
	text-align: center;
	animation: blurElement 750ms linear;

	@keyframes blurElement {
		0% {
			transform: translateY(20%) scale(0.8);
		}
		100% {
			transform: translateY(0) scale(1);
		}
	}
`;

export const Title = styled.h1`
	max-width: 380px;
	font-size: 40px;
	line-height: 1;
	margin-bottom: 21px;
`;

export const Text = styled.p`
	max-width: 380px;
	line-height: 1.625;
	margin-bottom: 32px;
`;

