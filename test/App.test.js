import React from "react";
import renderer from "react-test-renderer";
import App from "../App.tsx";
import Todo from "../pages/todos/index";
import Ganados from "../pages/ganados/index";
import Canjeados from "../pages/canjeados/index";
import DetalleDelMovimiento from "../pages/detalleDeMovimiento/index";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Table from "../components/table";
import { NavigationContainer } from "@react-navigation/native";

describe("<App />", () => {
	it("has 1 child", () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("<Todo />", () => {
	it("has 1 child", () => {
		const tree = renderer
			.create(
				<NavigationContainer>
					<Todo />
				</NavigationContainer>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("<Ganados />", () => {
	it("has 1 child", () => {
		const tree = renderer
			.create(
				<NavigationContainer>
					<Ganados />
				</NavigationContainer>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("<Canjeados />", () => {
	it("has 1 child", () => {
		const tree = renderer
			.create(
				<NavigationContainer>
					<Canjeados />
				</NavigationContainer>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("<DetalleDelMovimiento />", () => {
	it("has 1 child", () => {
		const tree = renderer
			.create(
				<NavigationContainer>
					<DetalleDelMovimiento />
				</NavigationContainer>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("<Card />", () => {
	it("has 1 child", () => {
		const tree = renderer.create(<Card />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe("<Table />", () => {
	it("has 1 child", () => {
		const tree = renderer.create(<Table />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
