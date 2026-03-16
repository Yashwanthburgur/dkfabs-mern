const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = /\.(pdf|png|jpg|jpeg|dwg|step|stp|iges|igs|stl|dxf)$/i;
    if (allowedExtensions.test(file.originalname.toLowerCase())) {
        return cb(null, true);
    }
    cb(new Error('Invalid file type. Only PDF, PNG, JPG, DWG, STEP, IGES, STL, DXF files are allowed.'));
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB max file size
        files: 10, // max 10 files
    },
    fileFilter: fileFilter
});

module.exports = upload;
