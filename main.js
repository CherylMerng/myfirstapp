// Import packages
const express = require('express')
const { append } = require('express/lib/response')
const morgan = require('morgan')

// Configure out port
// Check if it is set in the environment variable, if not then we default to 3000
const port = process.env.PORT || 3000   //check environment called Port, if this is not set, use 3000

//console.info(`port = ${port}`)

// Create an instance of express application
const app = express()

// Log all request
app.use(morgan('common'))

// GET / 
app.get('/', (req, resp) => {
    // what is the media type
    // return HTML content
    resp.type('text/html')

    // set the status code
    resp.status(200)

    // send the response
    resp.send(`<h1>The current time is now ${new Date()}</h1>`)
})

// Start our web application
app.listen(port, () => {
    console.info(`Starting application on port ${port} at ${new Date()}`)
})