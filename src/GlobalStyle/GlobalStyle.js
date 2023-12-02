import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

	* {
		box-sizing: border-box;
	};
	body {
		font-family: 'Nunito', sans-serif;
		font-size: 16px;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.87);
	};
`;

export const mediaRules = {
	mobile: '(min-width: 360px)',
	tablet: `(min-width: 768px)`,
	desctop: `(min-width: 1074px)`,
	large: `(min-width: 1170px)`,
};