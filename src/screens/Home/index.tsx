import { useTheme } from "styled-components";
import { Header } from "@components/Header";
import { Container, Label } from "./styles";
import { Card } from "@components/Card";
import { Meals } from "@components/Meals";
import { Refeicao } from "@data/dados";
import { useState } from "react";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { IconButton } from "@components/ButtonIcon";

import { getAllMeals } from "@data/getAllMeals";

export function Home() {
	const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
	const navigation = useNavigation();
	const [media, setMedia] = useState(0);
	const theme = useTheme();

	function handleEstatistica() {
		navigation.navigate("estatistica", { media });
	}

	function novaRefeicaoHandler() {
		navigation.navigate("novarefeicao", { editMode: false });
	}

	useFocusEffect(() => {
		async function fetchMeals() {
			const meals = await getAllMeals();
			setRefeicoes(meals);

			const totalCount = meals.reduce(
				(count, meal) => count + meal.data.length,
				0
			);
			const goodMealsCount = meals.reduce((count, meal) => {
				return count + meal.data.filter((item) => item.dieta).length;
			}, 0);

			setMedia((goodMealsCount / totalCount) * 100);
		}
		fetchMeals();
	});

	return (
		<Container>
			<Header />
			<Card
				value={media}
				description='das refeições dentro da dieta'
				iconType='DIREITA'
				onPressIcon={handleEstatistica}
				detach
			/>
			<Label>Refeições</Label>
			<IconButton
				title='Nova refeição'
				icon='Plus'
				onPress={() => novaRefeicaoHandler()}
			/>

			<Meals meal={refeicoes} />
		</Container>
	);
}
