const express = require("express");
const LZString = require("lz-string");

const app = express();

const encode = (str = "") => LZString.compressToEncodedURIComponent(str);
const decode = (str = "") => LZString.decompressFromEncodedURIComponent(str);

const data = JSON.stringify({
    test : "hey hey hey",
    data : "hooya",
});

app.get("/", (req, res) => {
    res.redirect(`http://localhost:5000/decode?note=${encode(data)}`);
});

app.get("/decode", (req, res) => {
    const {
        note : encoded = "",
    } = req.query;

    res.send(decode(encoded));
});

app.listen(5000, () => {

});
