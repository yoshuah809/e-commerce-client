import {
	AppBar,
	Switch,
	Toolbar,
	Typography,
	List,
	ListItem,
	IconButton,
	Badge,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";

interface Props {
	darkMode: boolean;
	handleThemeChange: () => void;
}

const midLinks = [
	{ title: "catalog", path: "/catalog" },
	{ title: "about", path: "/about" },
	{ title: "contact", path: "/contact" },
];

const rightLinks = [
	{ title: "login", path: "/login" },
	{ title: "register", path: "/register" },
];

const Header = ({ darkMode, handleThemeChange }: Props) => {
	return (
		<AppBar position="static" sx={{ mb: 4 }}>
			<Toolbar>
				<Typography
					variant="h6"
					component={NavLink}
					to="/"
					sx={{ color: "inherit", decoration: "none" }}
				>
					RE-STORE
				</Typography>
				<Switch checked={darkMode} onChange={handleThemeChange}></Switch>
				<List sx={{ display: "flex" }}>
					{midLinks.map(({ title, path }) => (
						<ListItem
							component={NavLink}
							to={path}
							key={path}
							sx={{ color: "inherit", typography: "h6" }}
						>
							{title.toUpperCase()}
						</ListItem>
					))}
				</List>
				<IconButton size="large" sx={{ color: "inherit" }}>
					<Badge badgeContent={4} color="secondary">
						<ShoppingCart />
					</Badge>
				</IconButton>
				<List sx={{ display: "flex" }}>
					{rightLinks.map(({ title, path }) => (
						<ListItem
							component={NavLink}
							to={path}
							key={path}
							sx={{ color: "inherit", typography: "h6" }}
						>
							{title.toUpperCase()}
						</ListItem>
					))}
				</List>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
