const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: String,
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    service: String,
    quantity: String,
    timeline: String,
    material: String,
    contactMethod: { type: String, enum: ['email', 'whatsapp', 'both'], default: 'email' },
    files: [{
        filename: String,
        originalName: String,
        size: Number,
        mimetype: String,
        path: String
    }],
    status: { type: String, enum: ['new', 'reviewing', 'quoted', 'approved', 'completed'], default: 'new' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);
