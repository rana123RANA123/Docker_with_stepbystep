const express = require("express");
const path = require('path')
const app = express();
app.get("/", (req, res) => {
    res.json([
        {

            id: 1,
            name: "Rana Asad Ali Munj Saab",
            age: 19
        },
        {

            id: 2,
            name: "Shahzaib",
            age: 20
        },
        {

            id: 3,
            name: "Numan",
            age: 21
        },
        {

            id: 4,
            name: "Zaigham",
            age: 22
        },
        {

            id: 5,
            name: "Hussnain",
            age: 1000
        },

    ])
});

app.listen(5500, () => {
    console.log("App is running on 5500 PORT")
    app
})