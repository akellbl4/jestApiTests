//Тестирование /clients
//Создание клиента
//Проверка обязательных полей

const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")

let token = ""
let data = ""
let requestBody = {
	passport_name: "ИВАН",
	passport_middlename: "ИВАНОВИЧ",
	passport_lastname: "ИВАНОВ",
	personal_phone: "71111111111",
	email: "user@example.com",
	region: "ИВАНОВСКАЯ",
	gender: 1,
	birth_date: "2010-01-01T00:00:00+03:00",
	birth_place: "МОСКВА",
	passport_seria: "1111",
	passport_number: "111111",
	passport_date: "2010-01-01T00:00:00+03:00",
	passport_police: "МОСКВА",
	passport_police_code: "111-111",
	passport_address: {
		postalcode: "400066",
		region: "ВОЛГОГРАДСКАЯ",
		region_type: "ОБЛ",
		district: "string",
		district_type: "string",
		place: "ВОЛГОГРАД",
		place_type: "Г",
		subplace: "string",
		subplace_type: "string",
		street: "МИРА",
		street_type: "УЛ",
		building: "9",
		corpus: "string",
		flat: "28",
		service_address:
			"Волгоградская обл, г Волгоград, Центральный р-н, ул Мира, д 9, кв 28",
		service_fias_id: "25e2e88f-2486-45b0-887f-05084258f849",
		service_fias_level: 7,
		service_kladr_id: "25e2e88f-2486-45b0-887f-05084258f849",
		service_qc_geo: 0
	},
	insurance_number: "111-111-111 11",
	tax_number: "123456789012"
}
describe("API /clients -> Create new client ", () => {
	beforeAll(async () => {
		let response = await new Token().getToken("agent")
		token = response.data.token
	})

	beforeAll(async () => {
		try {
			data = await apiResponse(token, requestBody, "POST", "clients")
		} catch (e) {
			data = e
		}
	})

	test("API /clients -> Create new client -> With correct fields", () => {
		expect(data.status).toEqual(200)
	})

	test("API /clients -> Create new client -> With correct fields -> Returned success msg", () => {
		expect(data.data).toEqual(
			expect.objectContaining({
				id: expect.any(String)
			})
		)
	})

	describe("API /clients -> Create new client -> Without required fields", () => {
		beforeAll(async () => {
			requestBody.passport_name = ""
			requestBody.passport_middlename = ""
			requestBody.passport_lastname = ""
			requestBody.passport_seria = ""
			requestBody.passport_number = ""
			requestBody.passport_date = ""
			requestBody.passport_police = ""
			requestBody.passport_police_code = ""

			try {
				data = await apiResponse(token, requestBody, "POST", "clients")
			} catch (e) {
				data = e
			}
		})

		test("API /clients -> Create new client -> Without required field -> passport_name", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_name"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_middlename", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_middlename"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_lastname", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_lastname"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_seria", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_seria"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_number", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_number"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_date", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_date"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_police", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_police"
					})
				])
			)
		})
		test("API /clients -> Create new client -> Without required field -> passport_police_code", () => {
			expect(data.response.data.violations).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						propertyPath: "passport_police_code"
					})
				])
			)
		})
	})
})
