import { CardContainer, Title, CardProps, IconContainer } from "./styled";
import { ArrowLeft } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

export function NovaRefeicaoCard({
	value,
	title,
	onPressIcon,
	bgcolor,
}: CardProps) {
	const isLow = value < 50; // Define se a cor deve ser alterada
	const { COLORS } = useTheme();
	return (
		<CardContainer
			isLow={isLow}
			bgcolor={bgcolor}
		>
			{/* Ícone posicionado no canto superior esquerdo ou direito */}
			<IconContainer onPress={onPressIcon}>
				<ArrowLeft
					size={32}
					color={COLORS.gray_1}
				/>
			</IconContainer>

			{/* Título e Descrição alinhados ao centro */}
			<Title>{title}</Title>
		</CardContainer>
	);
}
