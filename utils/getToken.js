const axios = require("axios")

class Token {
	async getToken(role) {
		let roles = {
			support: "exampleName",
			broker: "exampleName",
			agent: "exampleName"
		}
		let password
		if (role === "broker" || role === "agent") {
			password = "examplePass"
		} else if (role === "support") {
			password = "examplePass"
		}

		let data = await axios.post(
			"apiUrl",
			{
				username: roles[role],
				password: password
			}
		)
		return data
	}
}

module.exports = Token
