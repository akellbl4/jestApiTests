const axios = require("axios")
async function apiResponse(token, data, method, apiName) {
	let config = {
		headers: { Authorization: "bearer " + token }
	}

	if (method === "POST") {
		data = await axios.post(
			"apiUrl" + apiName,
			data,
			config
		)
	} else if (method === "GET") {
		data = await axios.get(
			"apiUrl" + apiName,
			config
		)
	} else if (method === "PUT") {
		data = await axios.put(
			"apiUrl" + apiName,
			data,
			config
		)
	}
	return data
}

module.exports = apiResponse
