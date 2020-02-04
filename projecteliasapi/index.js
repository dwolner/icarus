const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.send("api online!");
});

app.get('/listings', function (req, res) {
    axios.post('https://www.compass.com/api/v3/listings/search/list/relations', {
            searchQuery: {
                start: 0,
                num: 24,
                sortOrder: 90,
                listingTypes: [2],
                agentSearch: true,
                saleStatuses: [9, 12],
                geography: 'san_diego',
                listingDetailsAllowPartialMatch: {
                    'Agent Name': {
                        listValues: ['richard elias']
                    }
                },
            },
            relationTypes: [0]
        })
        .then(response => {
            res.send({ success: true, body: response.data })
        })
        .catch(error => {
            console.log(error);
            res.send({
                success: false,
                body: error
            })
        });
});

app.post('/contact', function (req, res) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'walnutman21@gmail.com',
            pass: 'Setessan12'
        }
    })

    const mailOptions = {
        to: 'xxatticus@gmail.com',
        from: `${ req.body.email }`,
        subject: `A new lead from RichardElias.com! ${ req.body.name }`,
        text: `A new lead from RichardElias.com! This is a reminder to email ${ req.body.name } (${ req.body.email }) ${ req.body.zip } about their inquiry. Courtesy of your friendly RichardElias.com email bot!`,
        html: `
            <h6>A new lead from RichardElias.com!</h6>
            <p>This is a reminder to email <strong>${ req.body.name }</strong> about their inquiry.</p>

            <p>Name: <strong>${ req.body.name }</strong></p> 
            <p>Email: <strong>${ req.body.email }</strong></p> 
            <p>#: <strong>${ req.body.phone }</strong></p> 
            <p>Zip: <strong>${ req.body.zip }</strong></p> 
            <br /><br />
            <p>Courtesy of your friendly RichardElias.com email bot!</p>
        `,
        replyTo: `${ req.body.email }`
    }

    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.error('there was an error: ', err)
            res.send({
                success: false,
                message: 'there was an error sending the email'
            })
        } else {
            console.log('here is the res: ', res)
            res.send({
                success: true,
                message: 'sent email!',
                body: res
            })
        }
    })
});

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));