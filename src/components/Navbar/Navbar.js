import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import nostalgia from "../../images/nostalgia.png";

import useStyles from "./styles";

const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Typography className={classes.heading} variant="h2" align="center">
				Nostalgia
			</Typography>
			<img
				className={classes.image}
				src={nostalgia}
				alt="nostalgia_icon"
				height="60"
			/>
		</AppBar>
	);
};

export default Navbar;
