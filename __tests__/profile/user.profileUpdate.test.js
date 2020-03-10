const Token = require("../../utils/getToken")
const apiResponse = require("../../utils/getApiData")
const arrayProfileData = require("../../utils/userProfileUpdateData")

let token = ""
let data = ""

let profileData = arrayProfileData()

for (const key in profileData) {
	describe("API user/profile update " + key, () => {
		beforeAll(async () => {
			let response = await new Token().getToken("broker")
			token = response.data.token
		})

		beforeAll(async () => {
			data = await apiResponse(token, profileData[key], "PUT", "user/profile")
		})

		test("Status 200 Returned", () => {
			expect(data.status).toEqual(200)
		})
	})
}
