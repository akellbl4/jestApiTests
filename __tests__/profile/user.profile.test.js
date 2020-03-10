const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""
let rolesForTest = ["broker", "agent"]

rolesForTest.forEach(role => {
	describe("API /offers/available -> Role : " + role, () => {
		beforeAll(async () => {
			let response = await new Token().getToken(role)
			token = response.data.token
		})

		beforeAll(async () => {
			data = await apiResponse(token, "", "GET", "user/profile")
		})

		/*	test('Status 200 Returned', () => {
				console.log(data.data)
			});*/

		test("Status 200 Returned", () => {
			expect(data.status).toEqual(200)
		})

		test("Status text is OK!", () => {
			expect(data.statusText).toEqual("OK")
		})

		test("API Data returned object", () => {
			expect(typeof data.data).toBe("object")
		})

		test("API Data returned correct object (requered fields are exists in ShortProfile)", () => {
			expect(data.data).toEqual(
				expect.objectContaining({
					lastname: expect.any(String),
					name: expect.any(String)
				})
			)
		})

		test("API Data returned correct object (requered fields are exists in ShortProfile -> Profile)", () => {
			expect(data.data.profile).toEqual(
				expect.objectContaining({
					birth_date: expect.any(String),
					birth_address: expect.any(String)
				})
			)
		})

		test("API Data returned correct object (requered fields are exists in ShortProfile -> Passport)", () => {
			expect(data.data.profile.passport).toEqual(
				expect.objectContaining({
					passport_seria: expect.any(String),
					passport_number: expect.any(String),
					passport_date: expect.any(String),
					passport_police: expect.any(String),
					passport_police_code: expect.any(String)
				})
			)
		})

		test("API Data returned correct object (requered fields are exists in ShortProfile -> Passport_address)", () => {
			expect(data.data.profile.passport_address).toEqual(
				expect.objectContaining({
					postalcode: expect.any(String),
					service_address: expect.any(String),
					service_fias_id: expect.any(String),
					service_fias_level: expect.any(Number),
					service_kladr_id: expect.any(String),
					service_qc_geo: expect.any(Number)
				})
			)
		})

		test("API Data returned correct object (requered fields are exists in ShortProfile -> Current_address)", () => {
			expect(data.data.profile.current_address).toEqual(
				expect.objectContaining({
					postalcode: expect.any(String),
					service_address: expect.any(String),
					service_fias_id: expect.any(String),
					service_fias_level: expect.any(Number),
					service_kladr_id: expect.any(String),
					service_qc_geo: expect.any(Number)
				})
			)
		})
	})
})
