import React, { useState } from "react";
// import  from "@material-ui/core/Select";
import {
	Select,
	MenuItem,
	Card,
	CardContent,
	Grid,
	makeStyles,
	FormControl,
} from "@material-ui/core";
import { fetchData } from "./api";
import styles from "./App.module.css";
import { TimeGraph, Username } from "./components/index";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "120%",
		height: "25%",
	},
	graphBox: {
		marginTop: "2%",
		mariginLeft: 0,
		width: "75%",
	},
	graph: {
		height: "25%",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));
const App = () => {
	const [userName, setUserName] = useState("");
	const [data, setData] = useState([]);
	const [QnType, setQnType] = useState("A");
	const classes = useStyles();

	let getAPI = async (e) => {
		e.preventDefault();
		let temp = await fetchData(userName);
		if (temp === "Invalid Input" || temp === "No Data available") {
			console.log(temp);
			alert(temp);
			return;
		}
		setData(temp);
		console.log(data);
	};
	let handleChange = (e) => {
		setQnType(e.target.value);
	};
	return (
		<div className={styles.container}>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
			>
				<Grid item component={Card}>
					<CardContent>
						<Username
							data={data}
							state={userName}
							setUserName={setUserName}
							getAPI={getAPI}
						/>
					</CardContent>
				</Grid>
				<Grid item component={Card} className={classes.graphBox}>
					{data.length ? (
						<CardContent className={classes.graph}>
							<FormControl className={classes.formControl}>
								<Select
									value={QnType}
									onChange={handleChange}
									defaultValue="A"
								>
									<MenuItem value={"A"}>A</MenuItem>
									<MenuItem value={"B"}>B</MenuItem>
									<MenuItem value={"C"}>C</MenuItem>
									<MenuItem value={"D"}>D</MenuItem>
									<MenuItem value={"E"}>E</MenuItem>
									<MenuItem value={"F"}>F</MenuItem>
									<MenuItem value={"I"}>I</MenuItem>
								</Select>
							</FormControl>

							<TimeGraph data={data} Character={QnType} />
						</CardContent>
					) : null}
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
