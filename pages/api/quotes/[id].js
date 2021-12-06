import {dbConnect} from "../../../helpers/dbConnect";
import Quote from './../../../models/QuoteSchema'
// import mysql from "mysql";


export default async (req, res) => {

    const {query: {id}, method} = req

    // let connection = await mysql.createConnection({
    //     host: '127.0.0.1',
    //     user: 'root',
    //     password: 'root',
    //     database: 'test_db',
    //     socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    // });
    //
    // connection.connect((err) => {
    //     if (err) {
    //         throw new Error(err)
    //     }
    // });


    await dbConnect();

    switch (method) {
        case "GET": {

            // let sql = `SELECT *
            //            FROM users
            //            WHERE id = ${id}`
            //
            // connection.query(sql, (error, results) => {
            //     if (error) {
            //         res.status(500).json({
            //             message: "Something wend wrong", error: error
            //         })
            //     }
            //
            //     res.status(200).json({
            //         results
            //     })
            // })
            //
            // connection.end();
            try {

                const users = await Quote.findById(id)

                res.status(200).json({
                    success: true,
                    users: users
                })
            } catch (error) {
                res.status(400).json({success: false, error})
            }
            break
        }
        case
        "DELETE": {

            // let sql = `DELETE
            //            FROM users
            //            WHERE id = ${id}`
            //
            // connection.query(sql, (error, results) => {
            //     if (error) {
            //         res.status(500).json({
            //             message: "Something wend wrong", error: error
            //         })
            //     }
            //
            //     res.status(200).json({
            //         results
            //     })
            // })
            //
            // connection.end();

            try {

                const users = await Quote.findByIdAndDelete({_id: id})

                res.status(200).json({
                    success: true, users: users
                })
            } catch (error) {
                res.status(400).json({success: false, error})
            }
            break
        }
        default: {
            res.status(400).json({success: false})
        }
    }
}
