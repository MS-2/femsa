import Card from "../../components/card";
import { Footer2 } from "../../components/footer";
import Header from "../../components/header";
import Table from "../../components/table";
import MainLayOut from "../../layouts/mainLayOut";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function Todos({ navigation }: any) {
	return (
		<MainLayOut>
			<Header />
			<Card />
			<Table navigation={navigation} />
			<Footer2 navigation={navigation} />
		</MainLayOut>
	);
}

export default Todos;
