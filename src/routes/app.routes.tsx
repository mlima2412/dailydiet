import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Estatisticas } from "@screens/Estatisticas";
import { NovaRefeicao } from "@screens/NovaRefeicao";
import { SaveDiet } from "@screens/SaveDiet";
import { ViewRefeicao } from "@screens/ViewRefeicao";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen
				name='home'
				component={Home}
			/>
			<Screen
				name='estatistica'
				component={Estatisticas}
			/>
			<Screen
				name='novarefeicao'
				component={NovaRefeicao}
			/>
			<Screen
				name='salvardieta'
				component={SaveDiet}
			/>
			<Screen
				name='viewrefeicao'
				component={ViewRefeicao}
			/>
		</Navigator>
	);
}
