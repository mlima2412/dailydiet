import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const ButtonContainer = styled(TouchableOpacity)<{
	bgColor?: string;
	borderColor?: string;
}>`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 70px;
	padding: 12px 16px;
	border-radius: 8px;
	border-width: 1px;
	border-color: ${({ borderColor, theme }) =>
		borderColor || theme.COLORS.gray_1};
	background-color: ${({ bgColor, theme }) => bgColor || theme.COLORS.gray_1};
`;

export const ButtonText = styled.Text<{ color?: string }>`
	font-size: ${({ theme }) => theme.FONT_SIZE.SMALL}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	color: ${({ color }) => color || "#fff"};
	margin-left: 8px;
`;
