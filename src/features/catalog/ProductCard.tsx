import React from "react";

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
	product: Product;
}

export const ProductCard = ({ product }: Props) => {
	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "secondary.main" }}>
						{product.name.charAt(0).toUpperCase()}
					</Avatar>
				}
				title={product.name}
				titleTypographyProps={{
					sx: { fontWeight: "bold", color: "primary.main" },
				}}
			/>
			<CardMedia
				sx={{
					height: 140,
					backgroundSize: "contain",
					bgcolor: "text.disabled",
				}}
				image={product.pictureUrl}
				title={product.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" color="secondary">
					${(product.price / 100).toFixed(2)}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{product.brand} / {product.type}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant="outlined">
					Add to cart
				</Button>
				<Button size="small" variant="outlined">
					View
				</Button>
			</CardActions>
		</Card>
	);
};
