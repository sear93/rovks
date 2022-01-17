import mongoose from "mongoose";

export async function dbConnect() {

    const options = {
        useNewUrlParser: true, autoIndex: true, useFindAndModify: false, useUnifiedTopology: true
    }

    try {
        mongoose.connect(process.env.MONGO_URI, options).then(result => {
            console.log('Successfully connected to DB :', result)
        })
    } catch {
        console.log("Connection failed")
    }
}
