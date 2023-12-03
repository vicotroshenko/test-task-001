import styled from "styled-components";


export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Group = styled.div`
	min-width: 328px;
	max-width: 380px;
`;

export const FieldLable = styled.label`
	position: absolute;
	left: 16px;
	top: 16px;
	background-color: #F8F8F8;
	transition: all 250ms linear;
`;

export const FormItem = styled.div`
	position: relative;
	color: #7E7E7E;
	line-height: 1.625;
	& ~ div {
		margin-top: 32px;
	}
`;

export const FieldInput = styled.input`
	width: 100%;
	padding: 15px 16px;
	border-radius: 4px;
	border: 1px solid #D0CFCF;
	background-color: #F8F8F8;
	line-height: 1.625;
	transition: border 250ms linear;

	&:focus-within + ${FieldLable} {
		top: -13px;
	}

	&:not(:placeholder-shown) + ${FieldLable}{
		top: -13px;
	}

	&:focus {
		border: 1px solid #00BDD3;
		outline: 1px solid #00BDD3;
	}

	&:hover {
		border: 1px solid #00BDD3;
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

export const RadioInputCustom = styled.span`
	position: relative;
	display: inline-block;
	width: 20px;
	height: 20px;
	background-color: #F8F8F8;
	border: 1px solid #D0CFCF;
	border-radius: 50%;
	margin-right: 12px;
	vertical-align: text-top;
	transition: border 250ms linear;

	&::before {
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
		display: inline-block;
		width: 10px;
		height: 10px;
		background-color: #00BDD3;
		border-radius: 50%;
		transition: transform 250ms linear;
	}
`;

export const RadioLable = styled.label`
	display: block;
	min-width: 328px;
	max-width: 380px;
	font-size: 16px;
	line-height: 1.625;
	cursor: pointer;
	
	&:nth-child(1n) {
		margin-top: 11px;
	}
	& ~ & {
		margin-top: 7px;
	}

	&:focus ${RadioInputCustom} {
		border: 1px solid #00BDD3;
	}

	&:hover ${RadioInputCustom}{
		border: 1px solid #00BDD3;
	}
`;

export const RadioInput = styled.input`
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
	z-index: -1;

	&:checked + ${RadioInputCustom} {
		border: 1px solid #00BDD3;
	}

	&:checked + ${RadioInputCustom}::before {
		transform: translate(-50%, -50%) scale(1);
	}
`;

export const UploadButon = styled.button`
	width: 83px;
	height: 54px;
	background-color: #F8F8F8;
	border-radius: 4px 0px 0px 4px;
	border: 1px solid rgba(0, 0, 0, 0.87);
	outline: none;
	font-size: 16px;
	cursor: pointer;
`;

export const UploadLable = styled.label`
	display: inline-block;
	width: calc(100% - 83px);
	border: 1px solid #D0CFCF;
	padding: 13px 95px 13px 16px;
	background: #F8F8F8;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	font-size: 16px;
	line-height: 1.62;
	vertical-align: top;
	cursor: pointer;
`;

export const InputWrapper = styled.div`
	min-width: 328px;
	max-width: 380px;
`;

export const ButtonWrapper = styled(InputWrapper)`
	text-align: center;
`;

export const Subtitle = styled.h2`
	font-size: 40px;
	line-height: 1;
	text-align: center;
	margin-bottom: 50px;
`;