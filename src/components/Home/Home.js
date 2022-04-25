import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Paginate from "../Pagination/Pagination";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/Form/Form";

import useStyles from "./styles";

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
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
						<Paper elevation={6}>
							<Paginate />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
