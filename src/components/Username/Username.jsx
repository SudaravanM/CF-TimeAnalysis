import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import styles from "./Username.module.css";

const Username = ({ userName, setUserName, getAPI }) => {
	return (
		<div className={styles.username}>
			<form noValidate autoComplete="off" onSubmit={getAPI}>
				<Input
					placeholder="Enter CF UserName"
					inputProps={{ "aria-label": "description" }}
					onChange={(e) => {
						setUserName(e.target.value);
						console.log(e.target.value);
					}}
				/>
			</form>
		</div>
	);
};

export default Username;
