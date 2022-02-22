import React, { Fragment } from "react";
import { Product } from "../../app/models/product";

interface Props {
	products: Product[];
	addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
	return (
		<Fragment>
			<ul>
				<button onClick={addProduct}>Add Product</button>
				{products.map((p: any) => (
					<li key={p.name}>
						{" "}
						<b>Name: </b> {p.name} Price: {p.price} {p.description}{" "}
					</li>
				))}
			</ul>
		</Fragment>
	);
}
