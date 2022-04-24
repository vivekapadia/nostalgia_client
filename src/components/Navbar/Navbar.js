import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import nostalgia from "../../images/nostalgia.png";

const Navbar = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const Logout = () => {
		dispatch({ type: "LOGOUT" });

		navigate("/");
		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		// JWT...

		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	const classes = useStyles();

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Link to="/">
				<img src={nostalgia} alt="icon" height="60" />
			</Link>
			<Toolbar className={classes.toolbar}>
				{user?.result ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={user?.result.name}
							src={user?.result.imageUrl}
						>
							{user?.result.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} variant="h6">
							{user?.result.name}
						</Typography>
						<Button variant="contained" color="secondary" onClick={Logout}>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to="/auth"
						variant="contained"
						color="primary"
					>
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
