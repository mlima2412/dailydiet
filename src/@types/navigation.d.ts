export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
			novarefeicao: {
				editMode: boolean;
				id?: string;
			};
			estatistica: {
				media: number;
			};
			salvardieta: {
				dieta: boolean;
			};
			viewrefeicao: {
				media: boolean;
				id: string;
			};
			players: {
				group: string;
			};
		}
	}
}
