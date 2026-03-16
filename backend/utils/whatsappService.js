const twilio = require('twilio');

class WhatsAppService {
    constructor() {
        this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        this.fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;
        this.toNumber = process.env.OWNER_WHATSAPP_NUMBER;
    }

    async sendQuoteNotification(quoteData) {
        const message = this.formatMessage(quoteData);
        return await this.client.messages.create({
            from: `whatsapp:${this.fromNumber}`,
            to: `whatsapp:${this.toNumber}`,
            body: message,
        });
    }

    formatMessage(quoteData) {
        return `New Quote Request from ${quoteData.name}\nEmail: ${quoteData.email}\nPhone: ${quoteData.phone}\nDescription: ${quoteData.description}`;
    }
}

module.exports = new WhatsAppService();
