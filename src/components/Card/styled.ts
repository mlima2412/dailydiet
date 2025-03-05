import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

// Tipagem para definir a posição do ícone
type IconPosition = "ESQUERDA" | "DIREITA";

// Estilização do Card principal
export const CardContainer = styled.View<{
	isLow: boolean;
	detach?: boolean | false;
	bgcolor?: string;
}>`
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, isLow, bgcolor }) =>
		bgcolor ? bgcolor : isLow ? theme.COLORS.red_mid : theme.COLORS.green_mid};
	border-radius: ${({ detach }) => (detach ? "8px" : "0px")};
	padding: 16px 20px;
	height: ${({ detach }) => (detach ? "102px" : "168px")};
	width: 100%;
	position: relative;
`;

// Título centralizado
export const Title = styled.Text<{ detach?: boolean }>`
	margin-top: ${({ detach }) => (detach ? "0px" : "55px")};
	font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

// Descrição abaixo do título
export const Description = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

// Botão de Ícone Posicionado Absolutamente
export const IconContainer = styled(TouchableOpacity)<{
	type: IconPosition;
	detach?: boolean;
}>`
	position: absolute;
	top: ${({ detach }) => (detach ? "12px" : "55px")};
	${({ type }) => (type === "ESQUERDA" ? "left: 12px;" : "right: 12px;")}
`;

export type CardProps = {
	value: number;
	description: string;
	iconType: IconPosition;
	bgcolor?: string;
	detach?: boolean;
	onPressIcon: () => void;
};
