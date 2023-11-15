const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('resume'), (req, res) => {
    // Handle file upload and job description
    res.status(200).send('File uploaded successfully');
});

module.exports = router;
