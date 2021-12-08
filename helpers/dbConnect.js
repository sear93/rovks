import mongoose from "mongoose";
// import mysql from "mysql";

export async function dbConnect() {

    const options = {
        useNewUrlParser: true, autoIndex: true, useFindAndModify: false, useUnifiedTopology: true
    }

    try {
        const result = await mongoose.connect(process.env.MONGO_URI, options)
        console.log('Successfully connected to DB :', result)
    } catch {
        console.log("Connection failed")
    }
}

// export async function mySqlConnetDB() {
//     let connection = await mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root',
//         password: 'root',
//         database: 'test_db',
//         socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
//     });
//
//     await connection.connect(function (err) {
//         if (err) {
//             console.error('error connecting: ' + err.stack);
//             return;
//         }
//
//         console.log('connected as id ' + connection.threadId);
//
//         return connection;
//     });
// }