const app = Vue.createApp({
	data() {
		return {
			firstName: '',
			lastName: '',
			age: '',
			country: '',
			city: '',
			email: '',
			phone: '',
			gender: '',
			picture: '',
		};
	},
	created() {
		this.setUserInfo();
	},
	methods: {
		async setUserInfo() {
			let data = await getRandomUser();
			// console.log(data);
			let user = await data['results'][0];

			(this.firstName = user.name.first),
				(this.lastName = user.name.last),
				(this.age = user.dob.age),
				(this.country = user.location.country),
				(this.city = user.location.city),
				(this.email = user.email),
				(this.phone = user.phone),
				(this.gender = user.gender),
				(this.picture = user.picture.large);
		},
	},
});

async function getRandomUser() {
	const response = await fetch('https://randomuser.me/api');

	return await response.json();
}

app.mount('#app');