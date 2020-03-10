const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""
describe("API /clients ", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(token, "", "GET", "clients")
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

	test("API Data returned correct object (fields are exists)", () => {
		expect(data.data[0]).toEqual(
			expect.objectContaining({
				id: expect.any(String),
				passport_name: expect.any(String),
				passport_middlename: expect.any(String),
				passport_lastname: expect.any(String),
				personal_phone: expect.any(String),
				e_mail: expect.any(String),
				orders_count: expect.any(Number),
				region: expect.any(String)
			})
		)
	})
})
