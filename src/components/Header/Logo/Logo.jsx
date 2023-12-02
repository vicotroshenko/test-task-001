import { LogoContainer } from "./Logo.styled";
import {ReactComponent as CatLogo} from "../../../images/svg/logo-cat.svg";
import {ReactComponent as TextLogo} from "../../../images/svg/logo-text.svg";

const Logo = () => {
	return (
		<LogoContainer href="/">
			<CatLogo/>
			<TextLogo/>
		</LogoContainer>
	)
}

export default Logo;