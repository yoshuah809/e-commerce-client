import { Typography, Container, Button, ButtonGroup } from "@mui/material";
import React from "react";
import agent from "../../app/api/agent";

const AboutPage = () => {
	return (
		<Container>
			<Typography gutterBottom variant="h2">
				Errors for Testing
			</Typography>

			<ButtonGroup fullWidth>
				<Button
					variant="outlined"
					onClick={() =>
						agent.TestErrors.get400Error().catch((error) => console.log(error))
					}
				>
					Test 400 Error
				</Button>
				<Button
					variant="outlined"
					onClick={() =>
						agent.TestErrors.get401Error().catch((error) => console.log(error))
					}
				>
					Test 401 Error
				</Button>{" "}
				<Button
					variant="outlined"
					onClick={() =>
						agent.TestErrors.get404Error().catch((error) => console.log(error))
					}
				>
					Test 404 Error
				</Button>
				<Button
					variant="outlined"
					onClick={() =>
						agent.TestErrors.get500Error().catch((error) => console.log(error))
					}
				>
					Test 500 Error
				</Button>
				<Button
					variant="outlined"
					onClick={() =>
						agent.TestErrors.getValidationError().catch((error) =>
							console.log(error)
						)
					}
				>
					Test Validation Error
				</Button>
			</ButtonGroup>
		</Container>
	);
};

export default AboutPage;
