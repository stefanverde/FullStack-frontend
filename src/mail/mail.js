import { createTransport } from 'nodemailer';
var mailTransporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'verdestefan87@gmail.com',
        pass: 'rysc qsac igan zpvv',
    },
});
var details = {
    from: 'verdestefan87@gmail.com',
    to: 'verdestefan87@gmail.com',
    subject: 'test',
    text: 'testing 3',
};
mailTransporter.sendMail(details, function (err) {
    if (err) {
        console.log('error');
        return;
    }
    console.log('email sent');
});
