const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token

beforeAll(async () => {
	const res = await new Token().getToken("broker")
	token = response.data.token
})

describe("API /password/reset", () => {
	it("should return 200", async () => {
		const data = await apiResponse(token, { phone: 'exampleNumber' }, "POST", "password/reset")

		expect(data.status).toEqual(200)
		expect(data.statusText).toEqual("OK")
	})
})

describe("API /clients", () => {
	it("shoult return 404", async () => {
		expect.assertions(2)
		try {
			await apiResponse(
				token,
				{ phone: 'exampleNumber2' },
				"POST",
				"password/reset"
			)
		} catch (e) {
			expect(data.response.status).toEqual(404)
			expect(data.response.data.status).toEqual("Пользователь не найден")
		}

	})
})
