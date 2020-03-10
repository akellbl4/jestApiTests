const axios = require("axios")
const Token = require("./getToken")
const faker = require("faker")
faker.locale = "ru"
//jestApiTests.setTimeout(100000)

exports.doRegistration = async function(position) {
	let response = await new Token().getToken("broker")
	let token = response.data.token
	let config = {
		headers: { Authorization: "bearer " + token }
	}
	let data = await axios.post(
		"apiUrl",
		{
			name: faker.name.findName(),
			phone: "7" + faker.phone.phoneNumber().replace(/\D+/g, ""),
			position: position
		},
		config
	)
	return data
}

exports.sendCode = async function(employeeId) {
	let response = await new Token().getToken("broker")
	let token = response.data.token
	let config = {
		headers: { Authorization: "bearer " + token }
	}
	let data = await axios.post(
		"apiUrl" + employeeId,
		config
	)
	return data
}

exports.inputCode = async function(employeeId) {
	let response = await new Token().getToken("broker")
	let token = response.data.token
	let config = {
		headers: { Authorization: "bearer " + token }
	}
	let data = await axios.post(
		"apiUrl" + employeeId,
		{
			code: 101101,
			debug: true
		},
		config
	)
	return data
}

exports.inputPassword = async function(employeeId) {
	let response = await new Token().getToken("broker")
	let token = response.data.token
	let config = {
		headers: { Authorization: "bearer " + token }
	}

	let data = await axios.post(
		"apiUrl" + employeeId,
		{
			password: "examplePass"
		},
		config
	)
	return data
}
