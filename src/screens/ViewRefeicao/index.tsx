import { NovaRefeicaoCard } from "@components/NovaRefeicaoCard";
import {
	MainContainer,
	MainTitle,
	DateTimeText,
	StatusDieta,
	ButtonContainer,
} from "./styles";
import { useTheme } from "styled-components/native";

import { useRoute, useNavigation } from "@react-navigation/native";
import { IconButton } from "@components/ButtonIcon";

import { useEffect, useState } from "react";
import { Description } from "@components/Card/styled";
import { Circle } from "phosphor-react-native";
import { Alert } from "react-native";
import { getMeal } from "@data/getMeal";
import { RefeicaoUnica } from "@data/dados";
import { removerRefeicaoPorId } from "@data/removeMeal";

type RouteParams = {
	media: number;
	id: string;
};

export function ViewRefeicao() {
	const [refeicao, setRefeicao] = useState<RefeicaoUnica>();
	const [isInDiet, setIsInDiet] = useState(false);
	const [isNotInDiet, setIsNotInDiet] = useState(false);
	const navigation = useNavigation();
	const route = useRoute();
	const { media, id } = route.params as RouteParams;
	const { COLORS } = useTheme();

	function handleDietType(type = "in") {
		if (type === "in") {
			setIsInDiet(true);
			setIsNotInDiet(false);
		} else {
			setIsInDiet(false);
			setIsNotInDiet(true);
		}
	}

	function editMeal() {
		navigation.navigate("novarefeicao", {
			editMode: true,
			id: id,
		});
	}

	async function remover() {
		await removerRefeicaoPorId(id);
		navigation.navigate("home");
	}

	function removeMealPrompt() {
		Alert.alert("", "Tem certeza que deseja excluir essa refeição?", [
			{
				text: "Cancelar",
				style: "cancel",
			},
			{
				text: "Sim, excluir",
				style: "destructive",
				onPress: () => remover(),
			},
		]);
	}

	useEffect(() => {
		async function fetchData() {
			if (id) {
				const dados = await getMeal(id);
				if (dados) {
					setRefeicao(dados);
				} else {
					Alert.alert("Erro", "Refeição não encontrada!");
				}
			}
		}
		fetchData();
	}, []);

	return (
		<>
			{""}
			<NovaRefeicaoCard
				value={media ? 50 : 0}
				title='Refeição'
				onPressIcon={() => navigation.navigate("home")}
			/>

			<MainContainer>
				<MainTitle>{refeicao?.nome}</MainTitle>
				<Description>{refeicao?.descricao}</Description>
				<DateTimeText>Dada e hora</DateTimeText>
				<Description>
					{refeicao?.dia} às {refeicao?.hora}
				</Description>
				<StatusDieta>
					<Circle
						size={8}
						weight='fill'
						color={refeicao?.dieta ? COLORS.green_mid : COLORS.red_mid}
					/>
					<Description>
						{refeicao?.dieta ? "dentro da dieta" : "fora da dieta"}
					</Description>
				</StatusDieta>
			</MainContainer>
			<ButtonContainer>
				<IconButton
					title='Editar refeição'
					icon='PencilSimpleLine'
					onPress={() => editMeal()}
				/>
				<IconButton
					title='Excluir refeição'
					titleColor={COLORS.gray_1}
					bgColor={COLORS.white}
					icon='Trash'
					onPress={() => removeMealPrompt()}
				/>
			</ButtonContainer>
		</>
	);
}
