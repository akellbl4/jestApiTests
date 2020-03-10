//Тестирование
//get /clients{id}, получение информации по одному клиенту
const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""
let clientId = "exampleId"

describe("API /clients ", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("broker")
		token = response.data.token
	})

	beforeAll(async () => {
		data = await apiResponse(token, "", "GET", "clients/" + clientId)
	})

	test("Status 200 Returned", () => {
		expect(data.status).toEqual(200)
	})

	test("Status text is OK!", () => {
		expect(data.statusText).toEqual("OK")
	})

	test("API Data returned object", () => {
		expect(typeof data.data).toBe("object")
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

	test("API Data returned correct object (fields and fields type like in docs)", () => {
		expect(data.data).toMatchObject({
			id: expect.toBeTypeOrNull("string"),
			passport_name: expect.toBeTypeOrNull("string"),
			passport_middlename: expect.toBeTypeOrNull("string"),
			passport_lastname: expect.toBeTypeOrNull("string"),
			personal_phone: expect.toBeTypeOrNull("string"),
			e_mail: expect.toBeTypeOrNull("string"),
			gender: expect.toBeTypeOrNull("number"),
			birth_date: expect.toBeTypeOrNull("string"),
			birth_place: expect.toBeTypeOrNull("string"),
			birth_region: expect.toBeTypeOrNull("string"),
			passport_seria: expect.toBeTypeOrNull("string"),
			passport_number: expect.toBeTypeOrNull("string"),
			passport_birth_address: expect.toBeTypeOrNull("string"),
			passport_date: expect.toBeTypeOrNull("string"),
			passport_police: expect.toBeTypeOrNull("string"),
			passport_police_code: expect.toBeTypeOrNull("string"),
			insurance_number: expect.toBeTypeOrNull("string"),
			tax_number: expect.toBeTypeOrNull("string")
		})

		expect(data.data.passport_address).toMatchObject({
			postalcode: expect.toBeTypeOrNull("string"),
			region: expect.toBeTypeOrNull("string"),
			region_type: expect.toBeTypeOrNull("string"),
			district: expect.toBeTypeOrNull("string"),
			district_type: expect.toBeTypeOrNull("string"),
			place: expect.toBeTypeOrNull("string"),
			place_type: expect.toBeTypeOrNull("string"),
			subplace: expect.toBeTypeOrNull("string"),
			subplace_type: expect.toBeTypeOrNull("string"),
			street: expect.toBeTypeOrNull("string"),
			street_type: expect.toBeTypeOrNull("string"),
			building: expect.toBeTypeOrNull("string"),
			corpus: expect.toBeTypeOrNull("string"),
			flat: expect.toBeTypeOrNull("string"),
			service_address: expect.toBeTypeOrNull("string"),
			service_fias_id: expect.toBeTypeOrNull("string"),
			service_fias_level: expect.toBeTypeOrNull("number"),
			service_kladr_id: expect.toBeTypeOrNull("string"),
			service_qc_geo: expect.toBeTypeOrNull("number")
		})

		expect(data.data.passport_address).toMatchObject({
			readable_address: expect.toBeTypeOrNull("string"),
			postalcode: expect.toBeTypeOrNull("string"),
			region: expect.toBeTypeOrNull("string"),
			region_type: expect.toBeTypeOrNull("string"),
			district: expect.toBeTypeOrNull("string"),
			district_type: expect.toBeTypeOrNull("string"),
			place: expect.toBeTypeOrNull("string"),
			place_type: expect.toBeTypeOrNull("string"),
			subplace: expect.toBeTypeOrNull("string"),
			subplace_type: expect.toBeTypeOrNull("string"),
			street: expect.toBeTypeOrNull("string"),
			street_type: expect.toBeTypeOrNull("string"),
			building: expect.toBeTypeOrNull("string"),
			corpus: expect.toBeTypeOrNull("string"),
			flat: expect.toBeTypeOrNull("string"),
			service_address: expect.toBeTypeOrNull("string"),
			service_fias_id: expect.toBeTypeOrNull("string"),
			service_fias_level: expect.toBeTypeOrNull("number"),
			service_kladr_id: expect.toBeTypeOrNull("string"),
			service_qc_geo: expect.toBeTypeOrNull("number")
		})
	})
})
