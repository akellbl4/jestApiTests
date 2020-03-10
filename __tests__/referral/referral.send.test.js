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

let roles = ["broker", "agent", "support"]

roles.forEach(role => {
	describe("API /referral/send is working -> !!ROLE!! : " + role, () => {
		beforeAll(async () => {
			let response = await new Token().getToken(role)
			token = response.data.token
		})
		beforeAll(async () => {
			try {
				data = await apiResponse(token, requestParam, "POST", "referral/send")
			} catch (e) {
				data = e
			}
		})

		test("Status 200 Returned for broker or status 403 Returned for Agent or Support", () => {
			if (role === "broker") {
				expect(data.status).toEqual(200)
			} else {
				expect(data.response.status).toEqual(403)
			}
		})

		test("Returned data is not empty", () => {
			if (role === "broker") {
				expect("status" in data.data).toBeTruthy()
			}
		})

		describe("API /referral/send -> phone validation test -> with 8", () => {
			beforeAll(async () => {
				requestParam = [
					{
						lastname: "ТестовыйПользовательTest",
						name: "ТестовыйПользовательTest",
						phone: "89892731972"
					}
				]
			})
			beforeAll(async () => {
				try {
					data = await apiResponse(token, requestParam, "POST", "referral/send")
				} catch (e) {
					data = e
				}
			})

			test("Status 400 Returned", () => {
				if (role === "broker") {
					expect(data.response.status).toEqual(400)
				} else {
					expect(data.response.status).toEqual(403)
				}
			})
		})

		describe("API /referral/send -> phone validation test -> number amount", () => {
			beforeAll(async () => {
				requestParam = [
					{
						lastname: "ТестовыйПользовательTest",
						name: "ТестовыйПользовательTest",
						phone: "7989273197"
					}
				]
			})
			beforeAll(async () => {
				try {
					data = await apiResponse(token, requestParam, "POST", "referral/send")
				} catch (e) {
					data = e
				}
			})

			test("Status 400 Returned", () => {
				if (role === "broker") {
					expect(data.response.status).toEqual(400)
				} else {
					expect(data.response.status).toEqual(403)
				}
			})
		})

		describe("API /referral/send -> agent already exist", () => {
			beforeAll(async () => {
				requestParam = [
					{
						lastname: "ТестовыйПользовательTest",
						name: "ТестовыйПользовательTest",
						phone: "71111111111"
					}
				]
			})
			beforeAll(async () => {
				try {
					data = await apiResponse(token, requestParam, "POST", "referral/send")
				} catch (e) {
					data = e
				}
			})

			test("Status 400 Returned", () => {
				if (role === "broker") {
					expect(data.response.status).toEqual(400)
				} else {
					expect(data.response.status).toEqual(403)
				}
			})
		})
	})
})
