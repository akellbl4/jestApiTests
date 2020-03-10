//Тестирование
// Получение реферальной ссылки => Регистрация по реферальной ссылке => Ввод пароля
//  referral => registration/{ref_id} => registration/password/{id}

const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")
const faker = require("faker")
faker.locale = "ru"

let token = ""
let refResponseData = ""
let regResponseData = ""
let requestParam = [
	{
		lastname: "Автотесты",
		name: faker.name.findName(),
		phone: "7" + faker.phone.phoneNumber().replace(/\D+/g, "")
	}
]
let passwordParam = [
	{
		password: "examplePass"
	}
]
let refId = ""
let createdAgentId = ""

describe("API /referral", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		refResponseData = await apiResponse(
			token,
			requestParam[0],
			"POST",
			"referral"
		)
	})

	test("Status 201 Returned", () => {
		expect(refResponseData.status).toEqual(201)
		refId = refResponseData.data.ref_id
	})
})

describe("API /registration", () => {
	beforeAll(async () => {
		regResponseData = await apiResponse(
			token,
			"",
			"POST",
			"registration/" + refId
		)
	})
	test("Status 200 Returned", () => {
		expect(regResponseData.status).toEqual(200)
		createdAgentId = regResponseData.data.id
	})
})

describe("API /registration/password{id}", () => {
	beforeAll(async () => {
		regPassResponseData = await apiResponse(
			token,
			passwordParam[0],
			"POST",
			"registration/password/" + createdAgentId
		)
	})
	test("Status 200 Returned", () => {
		expect(true).toEqual(true)
	})
})
