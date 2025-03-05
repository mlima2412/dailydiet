import { getAllMeals } from "./getAllMeals";
import { Refeicao } from "./dados";

export async function getEstatisticas(): Promise<{
	total: number;
	good: number;
	bestSequence: number;
}> {
	const totalMeals: Refeicao[] = await getAllMeals();
	const totalCount = totalMeals.reduce(
		(count, meal) => count + meal.data.length,
		0
	);
	const goodMealsCount = totalMeals.reduce((count, meal) => {
		return count + meal.data.filter((item) => item.dieta).length;
	}, 0);

	let bestSequence = 0;
	let currentSequence = 0;

	totalMeals.forEach((meal) => {
		meal.data.forEach((item) => {
			if (item.dieta) {
				currentSequence += 1;
				if (currentSequence > bestSequence) {
					bestSequence = currentSequence;
				}
			} else {
				currentSequence = 0;
			}
		});
	});

	return { total: totalCount, good: goodMealsCount, bestSequence };
}
