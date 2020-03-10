const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""

describe("API /division/agents", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(token, "", "GET", "division/agents")
	})

	test("Status 200 Returned", () => {
		expect(data.status).toEqual(200)
	})

	test("Status text is OK!", () => {
		expect(data.statusText).toEqual("OK")
	})

	test("API Data is not empty", () => {
		expect(data.data.length).toBeGreaterThan(0)
	})

	test("API Data returned object", () => {
		expect(typeof data.data).toBe("object")
	})
})
