const express = require("express");
const dotenv = require("dotenv");
const DbConnect = require('./database');

dotenv.config();

const app = express();
const router = require('./routes');
const cors = require('cors')

const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
}

app.use(cors(corsOption))

const PORT = process.env.PORT || 8081;
DbConnect()
app.use(express.json())
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello from express js')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))