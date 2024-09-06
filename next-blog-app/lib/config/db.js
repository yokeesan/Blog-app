import mongoose from "mongoose";


export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Blog:1234567890@cluster0.s12l0.mongodb.net/blog-app');
    console.log("DB Connected");
    
}