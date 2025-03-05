import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { STORAGE_KEY } from "./dados";

export async function removerRefeicaoPorId(id: string) {
	try {
		const refeicoes = await getAllMeals();

		for (let i = 0; i < refeicoes.length; i++) {
			const refeicaoDoDia = refeicoes[i];

			// Filtra para remover apenas a refeição correta pelo ID
			const novaListaRefeicoes = refeicaoDoDia.data.filter(
				(refeicao) => refeicao.id !== id
			);

			if (novaListaRefeicoes.length !== refeicaoDoDia.data.length) {
				refeicoes[i].data = novaListaRefeicoes;

				// Se o dia não tiver mais refeições, remove o dia inteiro
				if (refeicoes[i].data.length === 0) {
					refeicoes.splice(i, 1);
				}

				await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(refeicoes));
				return;
			}
		}

		console.warn("Refeição não encontrada para remoção.");
	} catch (error) {
		console.error("Erro ao remover refeição:", error);
	}
}
