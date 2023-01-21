import Card from "../../components/card";
import { Footer } from "../../components/footer";
import Header from "../../components/header";
import Table from "../../components/table";
import MainLayOut from "../../layouts/mainLayOut";

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
function Ganados({ navigation }: any) {
	return (
		<MainLayOut>
			<Header />
			<Card />
			<Table navigation={navigation} />
			<Footer texto="Todos" navigation={navigation} />
		</MainLayOut>
	);
}

export default Ganados;
