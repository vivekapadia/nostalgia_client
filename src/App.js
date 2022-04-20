import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import useStyles from "./styles";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<Navbar />
			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item sm={12} md={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item sm={12} md={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
