import { AppError } from "@utils/AppError";
import { Refeicao, STORAGE_KEY } from "./dados";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export async function salvarRefeicao(novaRefeicao: {
	dia: string;
	hora: string;
	nome: string;
	descricao: string;
	dieta: boolean;
}) {
	try {
		const dadosExistentes = await AsyncStorage.getItem(STORAGE_KEY);
		let refeicoes: Refeicao[] = dadosExistentes
			? JSON.parse(dadosExistentes)
			: [];

		// Verifica se já existe uma entrada para esse dia
		const index = refeicoes.findIndex(
			(refeicao) => refeicao.dia === novaRefeicao.dia
		);

		if (index !== -1) {
			// Verifica se já existe uma refeição no mesmo horário
			const jaExiste = refeicoes[index].data.some(
				(refeicao) => refeicao.hora === novaRefeicao.hora
			);

			if (jaExiste) {
				throw new AppError("Já existe uma refeição nesse dia e horário.");
			}

			// Adiciona a nova refeição com um ID único
			refeicoes[index].data.push({
				id: uuid.v4(), // Gera um ID único
				hora: novaRefeicao.hora,
				nome: novaRefeicao.nome,
				descricao: novaRefeicao.descricao,
				dieta: novaRefeicao.dieta,
			});

			// Ordena as refeições dentro do dia por horário
			refeicoes[index].data.sort((a, b) => a.hora.localeCompare(b.hora));
		} else {
			// Dia ainda não existe, cria uma nova entrada
			refeicoes.push({
				dia: novaRefeicao.dia,
				data: [
					{
						id: uuid.v4(),
						hora: novaRefeicao.hora,
						nome: novaRefeicao.nome,
						descricao: novaRefeicao.descricao,
						dieta: novaRefeicao.dieta,
					},
				],
			});
		}

		// Ordena os dias para facilitar a exibição no SectionList
		refeicoes.sort(
			(a, b) => new Date(a.dia).getTime() - new Date(b.dia).getTime()
		);

		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(refeicoes));
	} catch (error) {
		console.error("Erro ao salvar refeição:", error);
		throw error;
	}
}
