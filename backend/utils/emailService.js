const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendQuoteNotification(quoteData, files) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL,
            subject: `New Quote Request from ${quoteData.name}`,
            html: this.generateEmailTemplate(quoteData),
            attachments: files.map(file => ({
                filename: file.originalname,
                path: file.path,
            })),
        };

        return await this.transporter.sendMail(mailOptions);
    }

    generateEmailTemplate(quoteData) {
        return `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${quoteData.name}</p>
            <p><strong>Company:</strong> ${quoteData.company || 'N/A'}</p>
            <p><strong>Email:</strong> ${quoteData.email}</p>
            <p><strong>Phone:</strong> ${quoteData.phone}</p>
            <p><strong>Description:</strong> ${quoteData.description}</p>
            <p><strong>Service:</strong> ${quoteData.service || 'N/A'}</p>
            <p><strong>Quantity:</strong> ${quoteData.quantity || 'N/A'}</p>
            <p><strong>Timeline:</strong> ${quoteData.timeline || 'N/A'}</p>
            <p><strong>Material:</strong> ${quoteData.material || 'N/A'}</p>
        `;
    }
}

module.exports = new EmailService();
