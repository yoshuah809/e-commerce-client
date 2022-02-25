import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../../features/about/About";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/Contact";
import HomePage from "../../features/home/Home";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const paletteType = darkMode ? "dark" : "light";
	const theme = createTheme({
		palette: {
			mode: paletteType,
			background: {
				default: paletteType === "light" ? "#eaeaea" : "#121212",
			},
		},
	});

	const handleThemeChange = () => {
		setDarkMode(!darkMode);
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<ToastContainer position="top-right" hideProgressBar theme="colored" />
				<CssBaseline />
				<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
				<Container>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/catalog" component={Catalog} />
						<Route path="/catalog/:id" component={ProductDetails} />
						<Route path="/about" component={AboutPage} />
						<Route path="/contact" component={ContactPage} />
						<Route path="/server-error" component={ServerError} />
						<Route component={NotFound} />
					</Switch>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
