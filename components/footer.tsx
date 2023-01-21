import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function Footer({ texto, navigation: { navigate } }: any) {
	return (
		<View style={s.view}>
			<Button style={s.btnLG} onPress={() => navigate("todos")}>
				<Text style={{ color: "#FFFFFF" }}>{texto}</Text>
			</Button>
		</View>
	);
}

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function Footer2({ navigation: { navigate } }: any) {
	return (
		<View style={s.view2}>
			<Button style={s.btnSM} onPress={() => navigate("ganados")}>
				<Text style={{ color: "#FFFFFF" }}>Ganados</Text>
			</Button>
			<Button style={s.btnSM} onPress={() => navigate("canjeados")}>
				<Text style={{ color: "#FFFFFF" }}>Canjeados</Text>
			</Button>
		</View>
	);
}

export { Footer, Footer2 };

const s = StyleSheet.create({
	view: { margin: 20 },
	view2: {
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
		margin: 20,
	},
	btnLG: {
		borderRadius: 10,
		width: 353,
		height: 50,
		backgroundColor: "#334FFA",
		justifyContent: "center",
	},

	btnSM: {
		borderRadius: 10,
		width: 170,
		height: 50,
		backgroundColor: "#334FFA",
		justifyContent: "center",
		marginHorizontal: 2.5,
	},
});
