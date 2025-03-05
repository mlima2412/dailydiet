import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as Icons from "phosphor-react-native"; // Importa todos os ícones
import { ButtonContainer, ButtonText } from "./styles";

type IconName = keyof typeof Icons;

type IconButtonProps = TouchableOpacityProps & {
	title: string;
	titleColor?: string;
	icon?: IconName; // Ícone dinâmico
	fill?: string;
	bgColor?: string;
	borderColor?: string;
};

export function IconButton({
	title,
	titleColor,
	icon,
	bgColor,
	borderColor,
	fill,
	...rest
}: IconButtonProps) {
	const IconComponent = icon ? (Icons[icon] as React.ElementType) : null; // Obtém o ícone dinamicamente

	return (
		<ButtonContainer
			bgColor={bgColor}
			borderColor={borderColor}
			{...rest}
		>
			{IconComponent && (
				<IconComponent
					size={14}
					color={fill ? fill : bgColor ? "#000" : "#fff"}
					weight={fill ? "fill" : "bold"}
				/>
			)}
			<ButtonText color={titleColor}>{title}</ButtonText>
		</ButtonContainer>
	);
}
