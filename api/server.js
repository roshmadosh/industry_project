const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const emails = []

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/email", (req, res) => {
    const { email } = req.body;
    if (emails.includes(email)) {
        res.send({ 'status': "ERROR", 'message': 'Email already exists.' });
        return;
    }
    
    emails.push(email);
    res.send({ 'status': "SUCCESS", 'message': 'Email has been sent.' });
});


app.listen(PORT,() => console.log(`Server listening at port ${PORT}`));

