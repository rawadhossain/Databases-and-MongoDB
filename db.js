import mongoose from "mongoose";

const Schema = mongoose.Schema; //A class called Schema from mongoose library
const ObjectId = Schema.ObjectId;

// creating the structure of the collection of users
const User = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

// creating the structure of the collection of Todos
const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean,
});

const UserModel = mongoose.model("users", User); // ("collection name", schema)
const TodoModel = mongoose.model("todos", Todo);

//exporting the models to use them in other files
module.exports = {
    UserModel,
    TodoModel,
};
