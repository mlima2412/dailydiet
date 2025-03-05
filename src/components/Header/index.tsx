import { Container, Logo, Avatar } from "./style";
import logo from "../../assets/logo.png";
import avatar from "../../assets/Avatar.png";

export function Header() {
	return (
		<Container>
			<Logo source={logo} />
			<Avatar source={avatar} />
		</Container>
	);
}
