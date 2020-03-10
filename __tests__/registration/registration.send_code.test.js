//

const registration = require("../../utils/registration")
let store = {}

describe("API /registration -> With all steps", () => {
	it("API /registration returned status 200 and id_user ", async () => {
		await registration.doRegistration(50).then(data => {
			store.id = data.data.id
			employeeData = JSON.parse(data.config.data)
			employeePhone = employeeData.phone
			store.employeePhone = employeeData.phone

			expect(data.status).toBe(200)
			expect(data.data.id).toEqual(expect.any(Number))
		})
	})

	it("API /registration/send_code/ ->  Success", async () => {
		await registration.sendCode(store.id).then(data => {
			expect(data.data.status).toEqual("Успешно")
		})
	})

	it("API /registration/code/ -> Returned 200", async () => {
		await registration.inputCode(store.id).then(data => {
			expect(data.status).toBe(200)
			expect(data.data.id).toEqual(expect.any(Number))
		})
	})

	it("API /registration/password/ -> Password entered ", async () => {
		await registration.inputPassword(store.id).then(data => {
			expect(data.status).toBe(200)
			expect(data.data.status).toEqual("Успешно")
			console.log(
				"Был создан сотрудник с номером: " +
					store.employeePhone +
					" и паролем :examplePass"
			)
		})
	})
})
