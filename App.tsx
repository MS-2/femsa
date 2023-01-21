import { StatusBar } from "expo-status-bar";
import MyStack from "./navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function App() {
	const queryClient = new QueryClient();
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<QueryClientProvider client={queryClient}>
					<MyStack />
				</QueryClientProvider>
			</SafeAreaView>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}
