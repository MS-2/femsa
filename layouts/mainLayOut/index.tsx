import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

function MainLayOut({ children }: PropsWithChildren) {
	return <View style={styles.container}>{children}</View>;
}

export default MainLayOut;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F8F8F8;",
	},
});
