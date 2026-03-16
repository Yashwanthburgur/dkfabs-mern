const fs = require('fs');
const emailService = require('../utils/emailService');

const createQuote = async (req, res) => {
  try {
    console.log('🔔 NEW QUOTE FROM:', req.body.name);
    console.log('📧 EMAIL:', req.body.email);
    console.log('📱 PHONE:', req.body.phone);
    console.log('📄 DESCRIPTION:', req.body.description);
    console.log('📎 FILES:', req.files?.map(f => f.originalname) || 'None');

    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company || 'N/A',
      description: req.body.description,
      service: req.body.service || 'N/A',
      quantity: req.body.quantity || 'N/A',
      timeline: req.body.timeline || 'N/A',
      material: req.body.material || 'N/A',
      files: req.files || []
    };

    // SEND REAL EMAIL
    await emailService.sendQuoteNotification(data, req.files || []);
    console.log('✅ EMAIL SENT!');

    // Delete files (no storage)
    if (req.files) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
      });
      console.log('🗑️ Files deleted');
    }

    res.json({ 
      success: true, 
      message: '✅ Quote sent to your email! Check inbox.' 
    });
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createQuote, /* other functions */ };
