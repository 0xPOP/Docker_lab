const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(8080, () => {
    console.log("Server started at: 8080");
})