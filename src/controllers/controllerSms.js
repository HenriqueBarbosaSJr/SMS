const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

module.exports = {

    async sendSMS(req, res){
        console.log('passei aqui !!');
        
        try {
            const { message, number } = req.body;
            const response  = await client.messages
            .create({
                body: message,
                from: process.env.number,
                to: `+55${number}`
            })
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json(error);
            console.log(error);
            
        }
    }

}