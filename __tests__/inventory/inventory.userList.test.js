//Тестирование /inventory/user/list
//Получение списка позиций по инвентарю, проверка корректности возвращаемых
//значений, проверка под разными ролями пользователя

const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")
const standartSuite = require("../../utils/standartSuite")

let token = ""
let responseData = ""
let rolesForTest = ["broker", "agent"]

/*rolesForTest.forEach(role => {*/

describe("API /inventory/user/list ", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("agent")
		token = response.data.token
	})

	beforeAll(async () => {
		responseData = await apiResponse(token, "", "GET", "inventory/user/list")
	})

	test("Status 200 Returned", () => {
		expect(responseData.status).toEqual(200)
	})

	test("Status text is OK!", () => {
		console.log(responseData.data)
		expect(responseData.statusText).toEqual("OK")
	})

	test("API Data returned object", () => {
		expect(typeof responseData.data).toBe("object")
	})

	expect.extend({
		toBeTypeOrNull(received, argument) {
			const pass = typeof received === argument
			if (pass || received === null) {
				return {
					message: () => `Ok`,
					pass: true
				}
			} else {
				return {
					message: () => `expected ${received} to be ${argument} type or null`,
					pass: false
				}
			}
		}
	})

	test("Returns correct fields set", () => {
		expect(responseData.data[0]).toMatchObject({
			id: expect.toBeTypeOrNull("number"),
			title: expect.toBeTypeOrNull("string"),
			type: expect.toBeTypeOrNull("string"),
			count: expect.toBeTypeOrNull("number")
		})

		expect(responseData.data[0].product).toMatchObject({
			alias: expect.toBeTypeOrNull("string"),
			title: expect.toBeTypeOrNull("string"),
			img: expect.toBeTypeOrNull("string"),
			description: expect.toBeTypeOrNull("string")
		})

		expect(responseData.data[0].agents[0]).toMatchObject({
			agentId: expect.toBeTypeOrNull("number"),
			name: expect.toBeTypeOrNull("string"),
			count: expect.toBeTypeOrNull("number")
		})
	})
})

/*
})*/
