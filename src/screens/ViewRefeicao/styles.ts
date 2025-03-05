import styled from "styled-components/native";

export const MainContainer = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.gray_7};
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	padding: 16px 24px;
	margin-top: -48px;
`;

export const ButtonContainer = styled.View`
	padding: 24px;
	gap: 16px;
	margin-bottom: 16px;
`;

export const MainTitle = styled.Text`
	margin-top: 40px;
	margin-bottom: 4px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
`;

export const Description = styled.Text`
	color: ${({ theme }) => theme.COLORS.gray_2};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
`;

export const DateTimeText = styled.Text`
	margin-top: 16px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
`;

export const StatusDieta = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
	background-color: ${({ theme }) => theme.COLORS.gray_6};
	padding: 8px 16px;
	border-radius: 1000px;
	height: 44px;
	width: 200px;
	gap: 8px;
`;
