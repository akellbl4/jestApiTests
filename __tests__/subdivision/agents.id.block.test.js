//agents/{id}/block Блокировка агента
//Попытка заблокировать агента под ролями саппорт, брокер(Должно быть успешно, под ролью Агент(Должно быть провалено)
//TODO: Доделать когда блокировка действительно заработает

const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""
let data2 = ""
let requestParam = ["ТестАпи"]
let queryURLParam = [
	{ id: "exampleValue" }, // Существующий агент
	{ id: "exampleValue" } // Несуществующий агент
]

describe("API /agents{id}/block with role Broker", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(
			token,
			requestParam[0],
			"POST",
			"agents/" + queryURLParam[0].id + "/block"
		)
	})

	test("Status 200 Returned", () => {
		expect(data.status).toEqual(200)
	})

	describe("API /agents{id}/block checks", () => {
		beforeAll(async () => {
			try {
				data = await apiResponse(
					token,
					requestParam[0],
					"POST",
					"agents/" + queryURLParam[1].id + "/block"
				)
			} catch (e) {
				data = e
			}
		})

		test("API /agents{id}/block checks -> Incorrect agents id return 400 status", () => {
			expect(data.response.status).toEqual(400)
		})

		test("API /agents{id}/block checks -> Incorrect agents id return message with error", () => {
			expect(data.response.data.error).toEqual("Нет такого пользователя")
		})
	})
})

/*
describe('API /agents{id}/block with role Agent ', () => {
	beforeAll(async () => {
		let response = await new Token().getToken("agent")
		token = response.data.token
	});

	beforeAll(async () => {
		try{
			data = await apiResponse(token, requestParam[0], "POST", "agents/134/block")
		}catch (e) {
			data = e
		}

	})

	test('API /agents{id}/block checks -> Incorrect agents id return message with error', () => {
		expect(data.response.data.error).toEqual("Нет такого пользователя")
	})
})
*/
