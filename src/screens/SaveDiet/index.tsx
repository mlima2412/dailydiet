import { useRoute, useNavigation } from "@react-navigation/native";
import {
	Container,
	Title,
	Description,
	BoldDescription,
	DietResultImage,
} from "./styles";
import { IconButton } from "@components/ButtonIcon";

import goodDiet from "@assets/goog-diet.png";
import badDiet from "@assets/bad-diet.png";
import { useTheme } from "styled-components";

type RouteParams = {
	dieta: boolean;
};

export function SaveDiet() {
	const route = useRoute();
	const navigation = useNavigation();
	const theme = useTheme();

	const { dieta } = route.params as RouteParams;

	return (
		<Container>
			{dieta ? (
				<>
					<Title color={theme.COLORS.green_dark}>Continue assim!</Title>
					<Description>
						Você continua <BoldDescription>dentro da dieta.</BoldDescription>{" "}
						Muito bem!
					</Description>
					<DietResultImage source={goodDiet} />
				</>
			) : (
				<>
					<Title color={theme.COLORS.red_dark}>Que pena!</Title>
					<Description>
						Você <BoldDescription>saiu da dieta, </BoldDescription> dessa vez,
						mas continue se esforçando e não desista!
					</Description>
					<DietResultImage source={badDiet} />
				</>
			)}
			<IconButton
				title='Ir para página inicial'
				onPress={() => navigation.navigate("home")}
			/>
		</Container>
	);
}
