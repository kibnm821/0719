const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/Card4', function (req, res) {
res.sendFile(path.join(__dirname + '/Views/Park/Card4.html'));
});


app.use('/', router);