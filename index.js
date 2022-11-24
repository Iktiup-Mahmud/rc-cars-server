const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('colors')

const app = express();

app.use(cors())
app.use(express.json())

async function run() {
    
}

run().catch(console.log)

app.get('/', (req, res) => {
    res.send('server is up and running')
})

app.listen(port, () => console.log(`server running on ${port}`.bgBlue))