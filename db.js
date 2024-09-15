import mongoose from "mongoose";

const Schema = mongoose.Schema; //a class called Schema from mongoose library
const ObjectId = Schema.ObjectId;

// creating the structure of the collection of users
const User = new Schema({
    name: String,
    email: String,
    password: String,
});

// creating the structure of the collection of Todos
const Todo = new Schema({
    title: String,
    description: String,
    userId: ObjectId,
});

const UserModel = mongoose.model("User", User); // ("collection name", schema)
const TodoModel = mongoose.model("Todo", Todo);

//exporting the models to use them in other files
module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel,
};
