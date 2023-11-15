const express = require('express');
const multer = require('multer');
const uploadRoute = require('./routes/upload');

const app = express();
app.use(express.json());

app.use('/upload', uploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
