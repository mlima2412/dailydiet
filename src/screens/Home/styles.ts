import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.gray_7};
	padding: 24px;
`;

export const Label = styled.Text`
	margin-top: 40px;
	color: ${({ theme }) => theme.COLORS.gray_1};
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM}px;
`;
