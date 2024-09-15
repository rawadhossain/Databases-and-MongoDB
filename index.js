import express from "express";
import { UserModel, TodoModel } from "./db.js";

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    await UserModel.insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
});

app.post("/signin", (req, res) => {});

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.listen(3000);
