import { Button } from "./ButtonPrimery.styled";

const ButtonPrimery = ({ children, onButtonClick, disabled=null, ...props}) => {
	return (
		<Button 
			onClick={onButtonClick} 
			type="button"
			disabled={disabled} 
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonPrimery;