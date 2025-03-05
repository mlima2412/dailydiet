import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	padding: 32px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const Title = styled.Text<{ color?: string }>`
	font-size: ${({ theme }) => theme.FONT_SIZE.LARGE}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ color, theme }) => color || theme.COLORS.gray_1};
`;

export const Description = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	text-align: center;
`;

export const BoldDescription = styled.Text`
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DietResultImage = styled.Image`
	width: 224px;
	height: 288px;
	margin-bottom: 32px;
	margin-top: 40px;
`;
