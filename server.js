const express = require("express");
const path = require("path");

const app = express();

// Getting data from HTML form
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, "Public")));

// Setting a Port
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
