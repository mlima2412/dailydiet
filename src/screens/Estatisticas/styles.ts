import styled from "styled-components/native";

export const Container = styled.View<{ isLow: boolean }>`
	flex: 1;
	align-items: center;
	background-color: ${({ theme }) => theme.COLORS.gray_7};
	border-radius: 24px;
	padding: 24px;
	margin-top: -10px;
`;
export const StatsCard = styled.View<{ isDouble?: boolean; bgColor?: string }>`
	flex: ${({ isDouble }) => (isDouble ? "1" : "none")};
	width: ${({ isDouble }) =>
		isDouble
			? "48%"
			: "100%"}; /* Ocupa metade da tela quando está dentro do DobleStatsCard */
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	padding: 16px 20px;
	height: 89px;
	background-color: ${({ bgColor, theme }) => bgColor || theme.COLORS.gray_6};
	margin-bottom: 16px;
`;

export const DobleStatsCard = styled.View`
	flex-direction: row;

	width: 100%;
	gap: 16px;
`;

export const Title = styled.Text`
	margin-top: 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	margin-bottom: 24px;
`;
export const CardTitle = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const CardSubtitle = styled.Text`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
	color: ${({ theme }) => theme.COLORS.gray_2};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
