const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.route'))

async function start(){
    try {
        mongoose.connect('mongodb+srv://admin:admin@cluster0.qnxzx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            // useNewUrlParser: true,
            // useUnifidedTopology: true
            // useCreateIndex: true,
            // useFindAndModify: true
        })

        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })
    }catch(err){console.error(err)}
}
start()