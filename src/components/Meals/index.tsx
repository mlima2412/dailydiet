import { Header, Row, Hora, Nome } from "./style";
import { SectionList, TouchableOpacity } from "react-native";
import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Refeicao } from "@data/dados";

import { useNavigation, useFocusEffect } from "@react-navigation/native";

// Definição das props usando o tipo
type Props = {
	meal: Refeicao[];
};

export function Meals({ meal }: Props) {
	const theme = useTheme();
	const navigation = useNavigation();
	return (
		<>
			<SectionList
				sections={meal}
				keyExtractor={(item, index) => item.hora + index}
				renderSectionHeader={({ section: { dia } }) => <Header>{dia}</Header>}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("viewrefeicao", {
								media: item.dieta,
								id: item.id,
							})
						}
					>
						<Row>
							<Hora>{item.hora}</Hora>
							<Nome>{item.nome}</Nome>
							<Circle
								size={14}
								weight='fill'
								color={
									item.dieta ? theme.COLORS.green_mid : theme.COLORS.red_mid
								}
							/>
						</Row>
					</TouchableOpacity>
				)}
				contentContainerStyle={{ paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
			/>
		</>
	);
}
