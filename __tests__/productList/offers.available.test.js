const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""

describe("API /offers/available", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(token, "", "POST", "offers/available")
	})

	test("Status 200 Returned", () => {
		expect(data.status).toEqual(200)
	})

	test("Status text is OK!", () => {
		expect(data.statusText).toEqual("OK")
	})

	test("API Data returned object", () => {
		expect(typeof data.data).toBe("object")
	})

	test("API Data returned object have some properties", () => {
		expect(Object.getOwnPropertyNames(data.data).length > 0).toBe(true)
	})
})
