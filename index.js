//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwibmFtZSI6Ikp1bGlvIiwicGFzc3dvcmQiOiIxMjNhYmMiLCJpYXQiOjE2NTg5Mzk5MDN9.V3aX-ig2sjetjyJD5dyCSM71CoS9ie6xrULB0BTprD0
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const accessTokenSecret = 'secretinho';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

users = [
	{
		id: 0,
		name: "Julio",
		password: "123abc"
	},
	{
		id: 1,
		name: "Lucas",
		password: "40028922"
	}
]

const router = require("./routes/routes")

app.use(router)
// app.get(`/login`, (req,res) => {
// 	res.json(users)
// })
// app.post('/login', (req, res) => {
// 	const { id, name, password } = req.body;
// 	const user = users.find(u => { return u.name === name &&
// 	u.password === password });
// 	if (user) {
// 	const accessToken = jwt.sign({ id: user.id, name: user.name, password: user.password }, accessTokenSecret);
// 	res.json({
// 	accessToken
// 	});
// 	} else {
// 	res.send('Nome de usuário ou senha incorretos');
// 	}
// 	});

app.listen(3000, () => {
	console.log("Exemplo de aplicativo ouvindo a porta 3000");
});