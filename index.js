const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
require('colors')
require('dotenv').config()

const app = express();

app.use(cors())
app.use(express.json())

const uri = process.env.URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const categoriesCollection = client.db('rc-cars').collection('categories')
        const productsCollection = client.db('rc-cars').collection('products')

        app.get('/categories', async(req, res) => {
            const query = {}
            const options = await categoriesCollection.find(query).toArray()
            res.send(options)
        })

        app.get('/categories/:name', async (req, res) => {
            const name = req.params.name
            const query = { category : name }
            const options = await productsCollection.find(query).toArray()
            console.log(options)
            res.send(options)
        })


    }
    finally{

    }


}

run().catch(console.log)

app.get('/', (req, res) => {
    res.send('server is up and running')
})

app.listen(port, () => console.log(`server running on ${port}`.bgBlue))