import {
	CardContainer,
	IconContainer,
	Title,
	Description,
	CardProps,
} from "./styled";
import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function Card({
	value,
	description,
	iconType,
	onPressIcon,
	detach,
}: CardProps) {
	const isLow = value < 50; // Define se a cor deve ser alterada
	const { COLORS } = useTheme();
	return (
		<CardContainer
			isLow={isLow}
			detach={detach}
		>
			{/* Ícone posicionado no canto superior esquerdo ou direito */}
			<IconContainer
				type={iconType}
				onPress={onPressIcon}
				detach={detach}
			>
				{iconType === "ESQUERDA" ? (
					<ArrowLeft
						size={32}
						color={isLow ? COLORS.red_dark : COLORS.green_dark}
					/>
				) : (
					<ArrowUpRight
						size={32}
						color={isLow ? COLORS.red_dark : COLORS.green_dark}
					/>
				)}
			</IconContainer>

			{/* Título e Descrição alinhados ao centro */}
			<Title detach={detach}>{value.toFixed(2)} %</Title>
			<Description>{description}</Description>
		</CardContainer>
	);
}
