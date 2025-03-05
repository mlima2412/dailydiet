import styled from "styled-components/native";

export const MainContainer = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.gray_7};
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	padding: 16px 24px;
	margin-top: -48px;
`;

export const Container = styled.View`
	flex: 1;
`;

export const Label = styled.Text`
	margin-top: 40px;
	margin-bottom: 4px;
	color: ${({ theme }) => theme.COLORS.gray_2};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
`;

export const ColumnContainer = styled.View`
	flex-direction: row;
	gap: 20px;
	margin-bottom: 20px;
`;

export const Row = styled.View`
	flex-direction: row;
	gap: 20px;
	margin-bottom: 10px; /* Espaço entre as linhas */
`;

export const Column = styled.View<{ fullWidth?: boolean }>`
	flex: ${({ fullWidth }) =>
		fullWidth ? "1" : "0.48"}; /* Ocupa toda a largura se for fullWidth */
`;
