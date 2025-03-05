import styled from "styled-components/native";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const Header = styled.Text`
	margin-top: 20px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
`;

export const Row = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 14px;
	border-radius: 6px;
	border-color: ${({ theme }) => theme.COLORS.gray_5};
	border: 0.2px;
	gap: 10px;
	margin-bottom: 10px;
`;

export const Hora = styled.Text`
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
`;

export const Nome = styled.Text`
	flex: 1;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
`;
