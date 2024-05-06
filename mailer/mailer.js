const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});

mg.messages.create('sandbox824fad29a4c64387beb828bc7d6631ea.mailgun.org', {
	from: "Mailgun Sandbox <postmaster@sandbox824fad29a4c64387beb828bc7d6631ea.mailgun.org>",
	to: ["jakubmigda120@gmail.com"],
	subject: "Hello",
	text: "Testing some Mailgun awesomeness!",
	html: "<h1>Testing some Mailgun awesomeness!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error