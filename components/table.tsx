import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { List } from "react-native-paper";
import { useQuery } from "@tanstack/react-query";
import { AntDesign } from "@expo/vector-icons";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function Table({ navigation: { navigate } }: any) {
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

	const months = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];
	return (
		<View style={s.view}>
			<View>
				<FlatList
					data={data}
					renderItem={({
						item: { image, product, createdAt, is_redemption, id, points },
						index,
					}) => (
						<List.Item
							onPress={() =>
								navigate("detalle", {
									image,
									product,
									createdAt,
									is_redemption,
									id,
									points,
									months,
								})
							}
							title={
								<Text style={{ fontSize: 14, fontWeight: "800" }}>
									{product}
								</Text>
							}
							description={
								<Text style={{ fontSize: 12, fontWeight: "400" }}>{`${new Date(
									createdAt,
								).getDate()} de ${
									months[new Date(createdAt).getDate()]
								}, ${new Date(createdAt).getFullYear()}`}</Text>
							}
							left={() => (
								<View style={s.leftStyle}>
									<Image
										style={{
											borderRadius: 10,
										}}
										source={{
											uri: image,
											height: 45,
											width: 45,
										}}
									/>
								</View>
							)}
							right={() => (
								<View
									style={{
										alignItems: "center",
										flexDirection: "row",
									}}
								>
									<Text style={{ fontSize: 16 }}>
										{+is_redemption ? (
											<Text style={{ color: "#00B833" }}>+</Text>
										) : (
											<Text style={{ color: "#FF0000" }}>-</Text>
										)}
										{points}
									</Text>

									<AntDesign
										style={{ marginLeft: 10 }}
										name="right"
										size={16}
										color="#070707"
									/>
								</View>
							)}
						/>
					)}
				/>
			</View>
		</View>
	);
}

export default Table;

const s = StyleSheet.create({
	view: {
		alignSelf: "center",
		width: 353,
		height: 350,
		backgroundColor: "white",
		borderRadius: 7,
	},
	leftStyle: {
		marginLeft: 10,
		height: 55,
		width: 55,
		justifyContent: "center",
		alignItems: "center",
	},
});
