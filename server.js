const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/users.json");

app.use(express.json());
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen("3000", () => {
    console.log("yoo, server is runnig");
});





function getUsers() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}





function saveUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}





// const users = [];





app.post("/signup", (req, res) => {

    const { email, password } = req.body;

    const users = getUsers();

    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({ message: "User already Exists!" });
    }

    users.push({ email, password });
    saveUsers(users);
    console.log("users");


    res.json({ message: "User Created Successfully!" });
});





app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const users = getUsers();

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(400).json({ message: "User Does not exists!" });
    }

    if (password != user.password) {
        return res.status(400).json({ message: "Email or password is Invalid!" });
    }

    res.json({ message: "Login Successful" });
});