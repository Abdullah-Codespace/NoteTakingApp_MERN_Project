import mongoose from "mongoose"

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDp connected succesfully!");

    } catch (error){
        console.log("error connecting to mongoDP",error);
        process.exit(1);
    }
};