require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("client/build"))

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

app.post('/api/email', (req, res) => {
    console.log(req.body)
    let transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    })

    let mailOptions ={
        from: `aamnafea@gmail.com`, // sender address (who sends)
        to: 'aamnafea@hotmail.com', // list of receivers (who receives)
        subject: 'Portfolio Message', // Subject line
        text: `${req.body.message}`,
        html: `
        <h3>Name: ${req.body.firstName} ${req.body.lastName}</h3>
        
        <h3>E-mail: ${req.body.email}</h3>
        
        <p>Message: ${req.body.message}</p>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            return console.log(err)
        }
        
        return console.log('message sent')
    })
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening on port ${port}`))