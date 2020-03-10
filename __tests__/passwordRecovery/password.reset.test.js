const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""
let requestParam = [
	{ phone: 'exampleNumber' }, // Существующий номер
	{ phone: 'exampleNumber2' } // Несуществующий номер
]

describe("API /password/reset", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(token, requestParam[0], "POST", "password/reset")
	})

	test("Status 200 Returned", () => {
		expect(data.status).toEqual(200)
	})

	test("Status text is OK!", () => {
		expect(data.statusText).toEqual("OK")
	})

	describe("API /clients -> User is not found", () => {
		beforeAll(async () => {
			try {
				data = await apiResponse(
					token,
					requestParam[1],
					"POST",
					"password/reset"
				)
			} catch (e) {
				data = e
			}
		})

		test("Status 404 Returned", () => {
			expect(data.response.status).toEqual(404)
		})
		test("Status 404 Returned", () => {
			expect(data.response.data.status).toEqual("Пользователь не найден")
		})
	})
})
