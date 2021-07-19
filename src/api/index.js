import axios from "axios";

// const url = "https://codeforces.com/api/user.info?handles=sudhirMTS";
// const url =
// "https://codeforces.com/api/user.status?handle=sudhirMTS&from=1&count=10";
const processData = ({ result }) => {
	result = result.filter(
		({ author, verdict }) =>
			author.participantType === "CONTESTANT" && verdict === "OK"
	);
	return result;
};

export const fetchData = async (userName) => {
	const url =
		"https://codeforces.com/api/user.status?handle=" +
		userName +
		"&from=1&count=1000000000";

	try {
		const { data } = await axios.get(url);
		const result = processData(data);
		// console.log(data, userName);
		console.log(result, "IN API FOLDER");
		if (result.length === 0) {
			let error = "No Data available";
			return error;
		}
		return result;
	} catch (error) {
		console.error("Can't fetch the data");
		error = "Invalid Input";
		return error;
	}
};
