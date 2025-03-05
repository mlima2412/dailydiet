import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { STORAGE_KEY } from "./dados";

export async function updateMeal(
	dia: string,
	novosDados: {
		id: string;
		hora: string;
		nome: string;
		descricao?: string;
		dieta?: boolean;
	}
) {
	try {
		const refeicoes = await getAllMeals();

		for (let i = 0; i < refeicoes.length; i++) {
			let refeicaoDoDia = refeicoes[i];

			// Encontra a refeição pelo ID dentro do dia
			const indexRefeicao = refeicaoDoDia.data.findIndex(
				(refeicao) => refeicao.id === novosDados.id
			);

			if (indexRefeicao !== -1) {
				// Atualiza apenas os campos fornecidos
				refeicaoDoDia.data[indexRefeicao] = {
					...refeicaoDoDia.data[indexRefeicao],
					...novosDados,
				};

				// Reordena as refeições do dia pelo horário, se a hora foi alterada
				if (novosDados.hora) {
					refeicaoDoDia.data.sort((a, b) => a.hora.localeCompare(b.hora));
				}

				await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(refeicoes));
				return;
			}
		}

		console.warn("Refeição não encontrada para edição.");
	} catch (error) {
		console.error("Erro ao editar refeição:", error);
	}
}
