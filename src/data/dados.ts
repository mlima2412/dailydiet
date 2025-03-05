export type Refeicao = {
	dia: string;
	data: {
		id: string;
		hora: string;
		nome: string;
		descricao: string;
		dieta: boolean;
	}[];
};

export type RefeicaoUnica = {
	dia: string;
	id: string;
	hora: string;
	nome: string;
	descricao: string;
	dieta: boolean;
};

export const STORAGE_KEY = "@meals";

export const meals = [
	{
		dia: "12/08/2022",
		data: [
			{
				hora: "07:00",
				nome: "Cafe da manhã",
				descricao: "Pão integral com café",
				dieta: true,
			},
			{
				hora: "12:00",
				nome: "Almoço",
				descricao: "Arroz, feijão e frango grelhado",
				dieta: false,
			},
			{
				hora: "19:00",
				nome: "Jantar",
				descricao: "Sopa de legumes",
				dieta: false,
			},
		],
	},
	{
		dia: "13/08/2022",
		data: [
			{
				hora: "08:00",
				nome: "Café da Manhã",
				descricao: "Iogurte natural com granola",
				dieta: true,
			},
			{
				hora: "12:30",
				nome: "Almoço",
				descricao: "Macarrão com molho de tomate e carne moída",
				dieta: false,
			},
			{
				hora: "20:30",
				nome: "Jantar",
				descricao: "Omelete de queijo e tomate",
				dieta: false,
			},
		],
	},
	{
		dia: "14/08/2022",
		data: [
			{
				hora: "08:00",
				nome: "Café da Manhã",
				descricao: "Vitamina de banana com aveia",
				dieta: true,
			},
			{
				hora: "12:30",
				nome: "Almoço",
				descricao: "Peixe assado com batatas e salada",
				dieta: false,
			},
			{
				hora: "20:30",
				nome: "Jantar",
				descricao: "Sanduíche de peito de peru com queijo branco",
				dieta: false,
			},
		],
	},
];
