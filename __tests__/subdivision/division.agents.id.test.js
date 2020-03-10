//API /agents/{id} -----> Возвращает информацию об агенте брокера по id агента.
const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")
let token = ""
let agentsData = ""
let agentData = ""
let agentsIdArray = []

describe("API /division/agents is working", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		agentsData = await apiResponse(token, "", "GET", "division/agents")
		agentsData.data.forEach(agents => {
			agentsIdArray.push(agents.id)
		})
	})
	test("Status 200 Returned", () => {
		expect(agentsData.status).toEqual(200)
	})
	test("API Data returned object", () => {
		expect(typeof agentsData.data).toEqual("object")
		expect(agentsData.data.length).toBeGreaterThan(0)
	})
})

describe("API /agents{id} is working", () => {
	beforeAll(async () => {
		agentData = await apiResponse(
			token,
			"",
			"GET",
			"agents/" + agentsIdArray[0]
		)
	})
	test("API Status 200 Returned", () => {
		expect(agentData.status).toEqual(200)
	})

	test("API Data returned object", () => {
		expect(typeof agentData.data).toEqual("object")
	})

	test("API Data object fields is defined", () => {
		expect("id" in agentData.data).toBeTruthy()
		expect("lastname" in agentData.data).toBeTruthy()
		expect("name" in agentData.data).toBeTruthy()
		expect("middlename" in agentData.data).toBeTruthy()
		expect("secondary_phone" in agentData.data).toBeTruthy()
		expect("email" in agentData.data).toBeTruthy()
		expect("insurance" in agentData.data).toBeTruthy()
		expect("profile" in agentData.data).toBeTruthy()
	})
})

describe("API /agents{id} will return 400 status if agent doesnt exist", () => {
	beforeAll(async () => {
		try {
			agentData = await apiResponse(token, "", "GET", "agents/000111")
		} catch (e) {
			agentData = e
		}
	})
	test("Status 400 Returned", () => {
		expect(agentData.response.status).toEqual(400)
	})

	test("Error message exist", () => {
		expect(agentData.response.data.error).toBeDefined()
	})
})
