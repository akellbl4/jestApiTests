function profileData() {
	const arrayProfileData = {
		//With only required fields without Current address
		objOnlyRequiredFields: {
			lastname: "ЗУБЕНКО",
			name: "МИХАИЛ",
			middlename: "ПЕТРОВИЧ",
			email: "sss@gg.hj",
			secondary_phone: "79828818889",
			profile: {
				birth_date: "1969-12-12T00:00:00+03:00",
				birth_address: "РФ ГОР. САТУРНСК3",
				passport: {
					passport_seria: "1234",
					passport_number: "333234",
					passport_date: "1961-12-03T00:00:00+03:00",
					passport_police: "Тестовым ОВД г. Тестекекекеке",
					passport_police_code: "111-256"
				},
				passport_address: {
					postalcode: "333333",
					service_address:
						"г Москва, р-н Северное Медведково, ул Сухонская, д 11, кв 33",
					service_kladr_id: "7700000000028363333",
					service_fias_id: "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
					service_fias_level: 8,
					service_qc_geo: 0
				},
				has_current_address: false,
				current_address: null,
				insurance_number: "111-111-121 23",
				tax_number: "333233232323"
			}
		},

		//With only required fields with Current address
		objOnlyRequiredFieldsAndCurrentAdress: {
			lastname: "ЗУБЕНКО",
			name: "МИХАИЛ",
			middlename: "ПЕТРОВИЧ",
			email: "sss@gg.hj",
			secondary_phone: "79828818889",
			profile: {
				birth_date: "1969-12-12T00:00:00+03:00",
				birth_address: "РФ ГОР. САТУРНСК3",
				passport: {
					passport_seria: "1234",
					passport_number: "333234",
					passport_date: "1961-12-03T00:00:00+03:00",
					passport_police: "Тестовым ОВД г. Тестекекекеке",
					passport_police_code: "111-256"
				},
				passport_address: {
					postalcode: "333333",
					service_address:
						"г Москва, р-н Северное Медведково, ул Сухонская, д 11, кв 33",
					service_kladr_id: "7700000000028363333",
					service_fias_id: "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
					service_fias_level: 8,
					service_qc_geo: 0
				},
				has_current_address: true,
				current_address: {
					postalcode: "127642",
					service_address:
						"г Москва, р-н Северное Медведково, ул Сухонская, д 11, кв 30",
					service_kladr_id: "7700000000028360004",
					service_fias_id: "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
					service_fias_level: 8,
					service_qc_geo: 0
				},
				insurance_number: "111-111-121 23"
			}
		},

		//Without Current Address
		objAllExistingFields: {
			lastname: "ЗУБЕНКО",
			name: "МИХАИЛ",
			middlename: "ПЕТРОВИЧ",
			email: "sss@gg.hj",
			profile: {
				birth_date: "1969-12-12T00:00:00+03:00",
				birth_address: "РФ ГОР. САТУРНСК3",
				passport: {
					passport_seria: "1234",
					passport_number: "333234",
					passport_date: "1961-12-03T00:00:00+03:00",
					passport_police: "Тестовым ОВД г. Тестекекекеке",
					passport_police_code: "111-256"
				},
				passport_address: {
					postalcode: "333333",
					region: "МОСКВА",
					region_type: "Г",
					district: null,
					district_type: null,
					place: "МОСКВА",
					place_type: "Г",
					subplace: null,
					subplace_type: null,
					street: "СУХОНСКАЯ",
					street_type: "УЛ",
					building: "33",
					corpus: null,
					flat: "30",
					service_address:
						"г Москва, р-н Северное Медведково, ул Сухонская, д 11, кв 33",
					service_kladr_id: "7700000000028363333",
					service_fias_id: "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
					service_fias_level: 8,
					service_qc_geo: 0
				},
				has_current_address: false,
				current_address: null,
				insurance_number: "111-111-121 23",
				tax_number: "333233232323"
			},
			secondary_phone: "79828818889"
		},

		//With Current Address
		objAllFieldsCA: {
			lastname: "ЗУБЕНКО",
			name: "МИХАИЛ",
			middlename: "Автотесты",
			email: "sss@gg.hj",
			profile: {
				birth_date: "1969-12-12T00:00:00+03:00",
				birth_address: "РФ ГОР. САТУРНСК3",
				passport: {
					passport_seria: "1234",
					passport_number: "333234",
					passport_date: "1961-12-03T00:00:00+03:00",
					passport_police: "Тестовым ОВД г. Тестекекекеке",
					passport_police_code: "111-256"
				},
				passport_address: {
					postalcode: "333333",
					region: "МОСКВА",
					region_type: "Г",
					district: null,
					district_type: null,
					place: "МОСКВА",
					place_type: "Г",
					subplace: null,
					subplace_type: null,
					street: "СУХОНСКАЯ",
					street_type: "УЛ",
					building: "33",
					corpus: null,
					flat: "30",
					service_address:
						"г Москва, р-н Северное Медведково, ул Сухонская, д 11, кв 33",
					service_kladr_id: "7700000000028363333",
					service_fias_id: "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
					service_fias_level: 8,
					service_qc_geo: 0
				},
				has_current_address: true,
				current_address: {
					postalcode: "127642",
					region: "МОСКВА",
					region_type: "Г",
					district: null,
					district_type: null,
					place: "МОСКВА",
					place_type: "Г",
					subplace: null,
					subplace_type: null,
					street: "СУХОНСКАЯ",
					street_type: "УЛ",
					building: "11",
					corpus: null,
					flat: "30",
					service_address:
						"г Москва, р-н Северное Медведково, ул Сухонская, д 11, кв 30",
					service_kladr_id: "7700000000028360004",
					service_fias_id: "5ee84ac0-eb9a-4b42-b814-2f5f7c27c255",
					service_fias_level: 8,
					service_qc_geo: 0
				},
				insurance_number: "111-111-121 23",
				tax_number: "333233232323"
			},
			secondary_phone: "79828818889"
		}
	}
	return arrayProfileData
}
module.exports = profileData
