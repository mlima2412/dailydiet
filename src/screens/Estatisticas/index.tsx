import {
	Container,
	StatsCard,
	Title,
	CardTitle,
	CardSubtitle,
	DobleStatsCard,
} from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { Card } from "@components/Card";
import { getEstatisticas } from "@data/getEstatisticas";
import { useEffect, useState } from "react";

type RouteParams = {
	media: number;
};

export function Estatisticas() {
	const [estatistica, setEstatistica] = useState({
		total: 0,
		good: 0,
		bestSequence: 0,
	});

	const navigation = useNavigation();
	const route = useRoute();
	const { media } = route.params as RouteParams;
	const { COLORS } = useTheme();

	function handleGoBack() {
		navigation.goBack();
	}

	useEffect(() => {
		async function fetchDados() {
			console.log("Buscando dados...");
			getEstatisticas().then((data) => {
				setEstatistica(data);
			});
		}
		fetchDados();
	}, []);

	return (
		<>
			<Card
				value={(estatistica.good / estatistica.total) * 100}
				description='das refeições dentro da dieta'
				iconType='ESQUERDA'
				onPressIcon={handleGoBack}
			/>
			<Container isLow={media < 50}>
				<Title>Estatísticas gerais</Title>
				<StatsCard>
					<CardTitle>{estatistica.bestSequence}</CardTitle>
					<CardSubtitle>
						melhor sequencia de pratos dentro da dieta
					</CardSubtitle>
				</StatsCard>
				<StatsCard>
					<CardTitle>{estatistica.total}</CardTitle>
					<CardSubtitle>refeições registradas</CardSubtitle>
				</StatsCard>
				<DobleStatsCard>
					<StatsCard
						isDouble
						bgColor={COLORS.green_light}
					>
						<CardTitle>{estatistica.good}</CardTitle>
						<CardSubtitle>refeições dentro da dieta</CardSubtitle>
					</StatsCard>
					<StatsCard
						isDouble
						bgColor={COLORS.red_light}
					>
						<CardTitle>{estatistica.total - estatistica.good}</CardTitle>
						<CardSubtitle>refeições fora da dieta</CardSubtitle>
					</StatsCard>
				</DobleStatsCard>
			</Container>
		</>
	);
}
