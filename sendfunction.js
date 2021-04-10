const nodemailer = require('nodemailer')

module.exports = (from, to, insult) => {
    const transporter = nodemailer.createTransport({
        service: require('./config.json').EMAIL_SERVICE,
        auth: require('./config.json').EMAIL_AUTH
      });
      
      const mailOptions = {
        from: from,
        to: to,
        subject: require('./config.json').EMAIL_SUBJECT,
        text: insult,
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } 
      });


      return transporter
}