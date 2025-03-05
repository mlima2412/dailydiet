import AsyncStorage from "@react-native-async-storage/async-storage";
import { Refeicao, STORAGE_KEY } from "./dados";

export async function getAllMeals(): Promise<Refeicao[]> {
	try {
		const dados = await AsyncStorage.getItem(STORAGE_KEY);
		return dados ? JSON.parse(dados) : [];
	} catch (error) {
		console.error("Erro ao buscar refeições:", error);
		return [];
	}
}
