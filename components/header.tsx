import { StyleSheet, Text, View, Image } from "react-native";

function Header() {
	return (
		<View style={s.view}>
			<Text style={s.mainTittle}>Bienvenido de vuelta!</Text>
			<Text style={s.subTitle}>Ruben Rodriguez</Text>
		</View>
	);
}

export default Header;

const s = StyleSheet.create({
	view: { margin: 20 },

	mainTittle: {
		fontWeight: "800",
		fontStyle: "normal",
		color: "#020202",
		fontSize: 20,
		left: 10,
	},

	subTitle: {
		fontStyle: "normal",
		fontWeight: "400",
		color: "#020202",
		fontSize: 16,
		left: 10,
	},
});
