import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "./TimeGraph.module.css";

const TimeGraph = ({ data, Character }) => {
	const [result, setResult] = useState([]);
	useEffect(() => {
		console.log(data, data.length, "IN TIME GRAPH");
		setResult(data);
		// if (result.length > 0) {
		// 	console.log(result, result[0].id, result[0].relativeTimeSeconds);
		// }
	}, [data, result]);

	let plotLineChart = (Character) => {
		if (data.length > 0) {
			var qnNo = data.filter(
				({ problem }) => problem.index === Character
			);
			console.log(qnNo, qnNo.length);
			qnNo = qnNo.reverse();
		}
		const lineChart = data.length ? (
			<Line
				data={{
					labels: qnNo.map(
						({ problem: { index, contestId } }) =>
							String(contestId) + index
					),
					datasets: [
						{
							data: qnNo.map(({ relativeTimeSeconds }) => {
								var time = (relativeTimeSeconds / 60).toFixed(
									2
								);
								return time;
							}),
							label: "Time Taken in mins",
							borderColor: "#3333ff",
							fill: true,
						},
					],
				}}
			/>
		) : null;
		return lineChart;
	};

	return <div className={styles.container}>{plotLineChart(Character)}</div>;
};

export default TimeGraph;
// <Grid container spacing={5} justify="center"></Grid>;
// {
// 	lineChart;
// }
