var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    type:'OAuth2',
    user: creds.USER,
    //pass: creds.PASS,
    clientId: creds.clientId,
    clientSecret: creds.clientSecret,
    refreshToken: creds.refreshToken,
    accessToken: 'ya29.a0AfH6SMAUjnSXRV8d8XRN8SqWKUdN7lHi-yZHPCig20pB6vI3tU4TD7GnP9QKAmi1Rw0a4d73bEFM2baeGXATG5R-XUxyAo8eLT84quFB2li-soh6Vmi7-qhtRSuCzdWqGIuOTgiCInronzk4BTvgEpr8SXOx_-oHtns',    
  }
}

var transporter = nodemailer.createTransport(
    transport
    )

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `'name': ${name} \n 'email': ${email} \n 'message': ${message} `

  var mail = {
    from: name,
    to: 'amalla5@uic.edu',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)

