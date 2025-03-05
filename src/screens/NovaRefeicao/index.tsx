import { NovaRefeicaoCard } from "@components/NovaRefeicaoCard";
import { Label, MainContainer, Row, Column } from "./styles";
import { useTheme } from "styled-components/native";
import { Refeicao } from "@data/dados";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Input } from "@components/Input";
import { IconButton } from "@components/ButtonIcon";
import {
	Alert,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
} from "react-native";
import { useEffect, useState } from "react";
import { getMeal } from "@data/getMeal";
import { salvarRefeicao } from "@data/addMeal";
import { updateMeal } from "@data/updateMeal";

type RouteParams = {
	editMode: number;
	id: string;
};

export function NovaRefeicao() {
	const [diaMeal, setDiaMeal] = useState("");
	const [horaMeal, setHoraMeal] = useState("");
	const [nomeMeal, setNomeMeal] = useState("");
	const [descricaoMeal, setDescricaoMeal] = useState("");

	const [isInDiet, setIsInDiet] = useState(false);
	const [isNotInDiet, setIsNotInDiet] = useState(false);
	const navigation = useNavigation();
	const route = useRoute();
	const { editMode, id } = route.params as RouteParams;
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

	async function createMeal() {
		try {
			await salvarRefeicao({
				dia: diaMeal,
				hora: horaMeal,
				nome: nomeMeal,
				descricao: descricaoMeal,
				dieta: isInDiet,
			});
			navigation.navigate("salvardieta", { dieta: isInDiet ? true : false });
		} catch (error) {
			console.error("Erro ao criar refeição:", error);
			Alert.alert("Erro", "Erro ao criar refeição");
		}
	}

	async function atualizar() {
		try {
			await updateMeal(diaMeal, {
				id: id,
				nome: nomeMeal,
				dieta: isInDiet,
				descricao: descricaoMeal,
				hora: horaMeal,
			});
			navigation.navigate("viewrefeicao", { media: isInDiet, id: id });
		} catch (error) {
			console.error("Erro ao criar refeição:", error);
			Alert.alert("Erro", "Erro ao criar refeição");
		}
	}

	useEffect(() => {
		async function fetchData() {
			if (id && editMode) {
				const data = await getMeal(id);
				if (data) {
					console.log(data);
					setNomeMeal(data.nome);
					setDescricaoMeal(data.descricao);
					setDiaMeal(data.dia);
					setHoraMeal(data.hora);
					if (data.dieta) {
						setIsInDiet(true);
					} else {
						setIsNotInDiet(true);
					}
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
				value={0}
				bgcolor={COLORS.gray_5}
				title={editMode ? "Editar refeição" : "Nova refeição"}
				onPressIcon={() => navigation.goBack()}
			/>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1 }}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<MainContainer>
						<Label>Nome</Label>
						<Input
							value={nomeMeal}
							onChangeText={setNomeMeal}
						/>
						<Label>Descrição</Label>
						<Input
							multiline
							numberOfLines={4}
							value={descricaoMeal}
							onChangeText={setDescricaoMeal}
						/>
						<Row>
							<Column>
								<Label>Data</Label>
							</Column>
							<Column>
								<Label>Hora</Label>
							</Column>
						</Row>
						<Row>
							<Column>
								<Input
									value={diaMeal}
									onChangeText={setDiaMeal}
								/>
							</Column>
							<Column>
								<Input
									value={horaMeal}
									onChangeText={setHoraMeal}
								/>
							</Column>
						</Row>
						<Row>
							<Column>
								<Label>Está dentro da dieta?</Label>
							</Column>
							<Column></Column>
						</Row>
						<Row>
							<Column>
								<IconButton
									title='Sim'
									titleColor={COLORS.gray_1}
									bgColor={isInDiet ? COLORS.green_mid : COLORS.gray_6}
									borderColor={isInDiet ? COLORS.green_dark : COLORS.gray_6}
									fill={COLORS.green_dark}
									onPress={() => handleDietType("in")}
									icon='Circle'
								/>
							</Column>
							<Column>
								<IconButton
									title='Não'
									bgColor={isNotInDiet ? COLORS.red_mid : COLORS.gray_6}
									borderColor={isNotInDiet ? COLORS.red_dark : COLORS.gray_6}
									fill={COLORS.red_dark}
									onPress={() => handleDietType("out")}
									titleColor={COLORS.gray_1}
									icon='Circle'
								/>
							</Column>
						</Row>
						{editMode ? (
							<IconButton
								title='Salvar alterações'
								onPress={() => atualizar()}
							/>
						) : (
							<IconButton
								title='Cadastrar refeição'
								onPress={() => createMeal()}
							/>
						)}
					</MainContainer>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</>
	);
}
