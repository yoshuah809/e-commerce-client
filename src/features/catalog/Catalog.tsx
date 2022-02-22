import {
	Avatar,
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import React, { Fragment } from "react";
import { Product } from "../../app/models/product";

interface Props {
	products: Product[];
	addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
	return (
		<>
			<List>
				<Button variant="contained" onClick={addProduct}>
					Add Product
				</Button>
				{products.map((product) => (
					<ListItem key={product.id}>
						<ListItemAvatar>
							<Avatar src={product.pictureUrl} />
						</ListItemAvatar>
						<ListItemText>
							{product.name} - {product.price}
						</ListItemText>
					</ListItem>
				))}
			</List>
		</>
	);
}
