import styled from "styled-components";


export const FieldLable = styled.label`
	position: absolute;
	left: 16px;
	top: 16px;
	background-color: #F8F8F8;
	transition: all 250ms linear;
`;

export const FieldInput = styled.input`
	min-width: 328px;
	max-width: 380px;
	width: 100%;
	padding: 14px 16px;
	border-radius: 4px;
	border: 1px solid #D0CFCF;
	background-color: #F8F8F8;
`;

export const FormItem = styled.div`
	position: relative;
	color: #7E7E7E;
	line-height: 1.625;
	& ~ div {
		margin-top: 32px;
	}

	&:focus-within ${FieldLable} {
		top: -14px;
	}
`;

export const HelperText = styled.p`
	height: 14px;
	margin-top: 4px;
	font-size: 12px;
	line-height: 1.166;
`;

export const ErrorText = styled(HelperText)`
	color: #CB3D40;
`;