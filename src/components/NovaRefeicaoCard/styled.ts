import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

// Estilização do Card principal
export const CardContainer = styled.View<{
	isLow: boolean;
}>`
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, isLow }) =>
		isLow
			? theme.COLORS.red_mid
			: theme.COLORS.green_mid}; // Vermelho claro se < 50, verde claro se >= 50
	border-radius: 8px;
	padding: 16px 20px;
	height: 180px;
	width: 100%;
	position: relative;
`;

// Título centralizado
export const Title = styled.Text<{ detach?: boolean }>`
	margin-top: 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

// Botão de Ícone Posicionado Absolutamente
export const IconContainer = styled(TouchableOpacity)`
	position: absolute;
	top: 77px;
	left: 24px;
`;

export type CardProps = {
	value: number;
	title: string;
	onPressIcon: () => void;
};
