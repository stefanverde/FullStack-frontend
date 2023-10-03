const { createTransport } = require('nodemailer');

const mailTransporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'verdestefan87@gmail.com',
    pass: 'rysc qsac igan zpvv',
  },
});

let details = {
  from: 'verdestefan87@gmail.com',
  to: 'verdestefan87@gmail.com',
  subject: 'test',
  text: 'testing 3',
};

mailTransporter.sendMail(details, (err: any) => {
  if (err) {
    console.log('error');
    return;
  }
  console.log('email sent');
});
