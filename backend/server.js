require('dotenv').config() 
const express = require('express') 

const app = express()

app.get('/', (request, response) => { 
    response.json({ message: "Hello World" })
})

app.listen(process.env.PORT , () => {
    console.log(`Listening on port ${ process.env.PORT }`)
})