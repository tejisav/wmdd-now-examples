const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Node.js Express Server Example Deployment'))

app.listen(port)