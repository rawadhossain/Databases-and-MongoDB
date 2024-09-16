import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel, TodoModel } from "./db.js";

import { auth, JWT_SECRET } from "./auth.js";

mongoose.connect(
    "mongodb+srv://rawad:rawad2003@cluster0.dblls.mongodb.net/todo-db-999"
);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    res.json({ message: "User created Successfully" });
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email,
        password,
    });

    if (user) {
        //create a token
        const token = jwt.sign(
            {
                id: user._id.toString(),
            },
            JWT_SECRET
        );

        console.log(user);

        res.json({ token: token });
    } else {
        res.status(403).json({ message: "Invalid Credentials" });
    }
});

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done,
    });

    res.json({ message: "Todo created Successfully" });
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId,
    });

    res.json({ todos });
});

app.listen(3000);
