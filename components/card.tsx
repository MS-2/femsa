import { StyleSheet, Text, View, Image } from "react-native";

import { useQuery } from "@tanstack/react-query";
function Card() {
	const { data, status, error } = useQuery(["products"], async () => {
		const response = await fetch(
			"https://6222994f666291106a29f999.mockapi.io/api/v1/products",
		);
		if (!response.ok) throw new Error(response.statusText);
		const json = await response.json();
		return json;
	});
	if (status === "loading") return <Text>Loading...</Text>;

	if (status === "error") return <Text>Error: {error.message}</Text>;
	let points = data.reduce(
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		(acumulador: number, actual: any) => acumulador + actual.points,
		0,
	);
	let stringNum = points.toString();
	return (
		<View>
			<Text style={s.puntos}>TUS PUNTOS</Text>
			<View style={s.card}>
				<Text style={s.dateText}>Diciembre</Text>
				<Text style={s.mainText}>
					{`${stringNum.substring(0, 2)},${stringNum.substring(
						1,
						3,
					)}.${stringNum.substring(3)} pts`}
				</Text>
			</View>
			<Text style={s.puntos}>TUS MOVIMIENTOS</Text>
		</View>
	);
}

export default Card;

const s = StyleSheet.create({
	card: {
		width: 286,
		height: 143,
		alignSelf: "center",
		backgroundColor: "#334FFA",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.5);",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 5.62,
		elevation: 8,
	},

	dateText: {
		position: "absolute",
		top: 22,
		left: 22,
		width: 77,
		height: 22,
		fontWeight: "800",
		fontStyle: "normal",
		color: "#FFFFFF",
	},
	mainText: {
		position: "absolute",
		top: 50,
		alignSelf: "center",
		color: "#FFFFFF",
		fontWeight: "800",
		fontSize: 32,
	},
	puntos: {
		color: "#9B9898",
		fontWeight: "800",
		fontSize: 14,
		left: 10,
		marginLeft: 20,
		marginVertical: 10,
	},
});
