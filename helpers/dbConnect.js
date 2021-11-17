import mongoose from "mongoose";

export async function dbConnect() {

    const options = {
        useNewUrlParser: true,
        autoIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }

    try {
        const result = await mongoose.connect(process.env.MONGO_URI, options)
        console.log('Successfully connected to DB :', result)
    } catch {
        console.log("Connection failed")
    }
}