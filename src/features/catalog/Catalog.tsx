import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { Product } from "../../app/models/product";
import { ProductList } from "./ProductList";

interface Props {
	products: Product[];
	addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
	return (
		<>
			<Button variant="contained" onClick={addProduct}>
				Add Product
			</Button>
			<br />
			<br />
			<br />

			<ProductList products={products} />
		</>
	);
}
