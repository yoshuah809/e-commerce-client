import { Button, Container, Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Container component={Paper} sx={{ height: 200 }}>
			<Typography variant="h4" gutterBottom>
				oOPS, We cound not find what you are looking for
			</Typography>
			<Button fullWidth component={Link} to="/catalog">
				Go Back to Store
			</Button>
		</Container>
	);
};

export default NotFound;
