import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)<{ multiline?: boolean }>`
	flex: 1;

	min-height: ${({ multiline }) => (multiline ? "120px" : "48px")};
	max-height: ${({ multiline }) => (multiline ? "120px" : "48px")};

	${({ theme }) => css`
		color: ${theme.COLORS.gray_1};
		/* background-color: ${theme.COLORS.gray_5}; */
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MEDIUM}px;
	`};
	border: 1px solid ${({ theme }) => theme.COLORS.gray_5};
	border-radius: 6px;
	padding: 14px;
`;
