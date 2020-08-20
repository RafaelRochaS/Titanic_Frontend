const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const path = require("path");

const fileDirectory = path.resolve(__dirname, "./titanic/dist")

app.use(express.static(fileDirectory));

app.get("*", (req, res) => {
    res.sendFile("index.html", { root: fileDirectory}, (err) => {
        res.end();

        if (err) throw err;
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});