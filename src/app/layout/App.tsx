import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./Header";

function App() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		fetch("http://localhost:5000/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	function addProducts() {
		setProducts((prevState) => [
			...prevState,
			{
				id: prevState.length + 101,
				name: "Product" + (prevState.length + 1),
				price: prevState.length * 15,
				brand: "Some Brand",
				description: "some description",
				pictureUrl: "http://picsum.photos/200",
			},
		]);
	}
	return (
		<>
			<CssBaseline />
			<Header />
			<Container>
				<Catalog products={products} addProduct={addProducts} />
			</Container>
		</>
	);
}

export default App;
