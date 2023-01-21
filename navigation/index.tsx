import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Canjeados from "../pages/canjeados";
import DetalleDelMovimiento from "../pages/detalleDeMovimiento";
import Ganados from "../pages/ganados";
import Todos from "../pages/todos";

export type RootStackParamList = {
	todos: undefined;
	ganados: undefined;
	detalle: undefined;
	canjeados: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNav = () => {
	const NoBannerNoSwipe = { headerShown: false, swipeEnabled: false };
	return (
		<Stack.Navigator initialRouteName='todos'>
			<Stack.Screen options={NoBannerNoSwipe} name="todos" component={Todos} />
			<Stack.Screen
				options={NoBannerNoSwipe}
				name="ganados"
				component={Ganados}
			/>
			<Stack.Screen name="detalle" component={DetalleDelMovimiento} />
			<Stack.Screen
				options={NoBannerNoSwipe}
				name="canjeados"
				component={Canjeados}
			/>
		</Stack.Navigator>
	);
};

const MyStack = () => {
	return (
		<NavigationContainer>
			<HomeNav />
		</NavigationContainer>
	);
};

export default MyStack;
