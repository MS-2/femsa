import { Footer } from "../../components/footer";
import MainLayOut from "../../layouts/mainLayOut";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, StyleSheet } from "react-native";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function DetalleDelMovimiento({ navigation, route }: any) {
	navigation.setOptions({ title: route.params.product });
	let date = route.params.createdAt;
	let formattedate = `${new Date(date).getDate()} de ${
		route.params.months[new Date(date).getDate()]
	}, ${new Date(date).getFullYear()}`;
	return (
		<MainLayOut>
			<Image
				style={{
					alignSelf: "center",
					marginVertical: 20,
					backgroundColor: "white",
					width: 350,
					height: 350,
					borderRadius: 10,
				}}
				source={{ uri: route.params.image, width: 200, height: 200 }}
			/>
			<Text style={s.subTitle}>Detalles del producto:</Text>
			<Text style={s.mainTittle}>Comprado el {formattedate}</Text>
			<Text style={s.subTitle}>Con esta compra acumulaste:</Text>
			<Text style={{ ...s.mainTittle, fontSize: 20 }}>100 puntos</Text>
			<Footer texto="Aceptar" navigation={navigation} />
		</MainLayOut>
	);
}

export default DetalleDelMovimiento;

const s = StyleSheet.create({
	mainTittle: {
		fontWeight: "800",
		fontStyle: "normal",
		color: "#020202",
		fontSize: 16,
		left: 30,
		marginVertical: 10,
	},

	subTitle: {
		fontStyle: "normal",
		fontWeight: "800",
		color: "#9B9898",
		fontSize: 14,
		left: 30,
		marginVertical: 10,
	},
});
