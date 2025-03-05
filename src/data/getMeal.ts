import { getAllMeals } from "@data/getAllMeals";
import { AppError } from "@utils/AppError";

export async function getMeal(id: string) {
	try {
		const refeicoes = await getAllMeals();

		for (const refeicaoDoDia of refeicoes) {
			const refeicaoEncontrada = refeicaoDoDia.data.find(
				(refeicao) => refeicao.id === id
			);
			if (refeicaoEncontrada) {
				return { ...refeicaoEncontrada, dia: refeicaoDoDia.dia }; // Retorna o dia para referência
			} else {
				throw new AppError("Refeição não encontrada");
			}
		}
		return null;
	} catch (error) {
		console.error("Erro ao buscar refeição pelo ID:", error);
		return null;
	}
}
