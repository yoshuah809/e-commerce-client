import { useEffect, useState } from "react";
import { Product } from "./product";

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
		<div className="container py-3">
			<h1 style={{ color: "blue" }}> Re-Store</h1>
			<button onClick={addProducts}>Add Product</button>
			<ul>
				{products.map((p) => (
					<li key={p.name}>
						{" "}
						<b>Name: </b> {p.name} Price: {p.price} {p.description}{" "}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
