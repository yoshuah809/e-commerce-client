import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState([
		{ name: "product1", price: 100.0 },
		{ name: "product2", price: 110.0 },
		{ name: "product3", price: 125.0 },
	]);

	useEffect(() => {
		fetch("http://localhost:5000/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	function addProducts() {
		setProducts((prevState) => [
			...prevState,
			{
				name: "product" + (prevState.length + 1),
				price: prevState.length * 15,
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
						<b>Name: </b> {p.name} Price: {p.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
