import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const ServerError = () => {
	const history = useHistory();
	const { state } = useLocation<any>();
	return (
		<Container component={Paper}>
			{state?.error ? (
				<>
					<Typography variant="h3" color="error" gutterBottom>
						{state.error.title} - {state.error.status}
					</Typography>
					<Divider />
					<Typography>
						{state.error.detail || "Internal Server Error"}
					</Typography>
				</>
			) : (
				<Typography variant="h5" gutterBottom>
					Server error
				</Typography>
			)}
			<Button variant="contained" onClick={() => history.push("/catalog")}>
				Go BAck to Store
			</Button>
		</Container>
	);
};

export default ServerError;
