const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")
const faker = require("faker")
faker.locale = "ru"

let token = ""
let data = ""
let requestParam = [
	{
		lastname: "Автотесты",
		name: faker.name.firstName(),
		phone: "7" + faker.phone.phoneNumber().replace(/\D+/g, "")
	}
]

describe("API /referral", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(token, requestParam[0], "POST", "referral")
	})

	test("Status 201 Returned", () => {
		expect(data.status).toEqual(201)
	})

	test("Status text is OK!", () => {
		expect(data.statusText).toEqual("Created")
	})
})
