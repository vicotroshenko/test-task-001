import { Button } from "./ButtonPrimery.styled";

const ButtonPrimery = ({ children, onButtonClick, disabled=null, type="button", ...props}) => {
	return (
		<Button 
			onClick={onButtonClick} 
			type={type}
			disabled={disabled} 
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonPrimery;