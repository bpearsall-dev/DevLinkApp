const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');  

const app = express();
app.use(cors());  
const port = process.env.PORT || 3000;

// SendGrid API key
sgMail.setApiKey('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');

app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
    
    const { email } = req.body;
    
    const msg = {
        to: email,
        from: 'bmpearsall@mac.com', 
        subject: 'Welcome to DEVLink@Deakin!',
        text: 'Thank you for subscribing to DEVLink@Deakin. We\'re excited to have you with us!',
    };

    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent');
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body);
        }

        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
