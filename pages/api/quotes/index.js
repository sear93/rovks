const path = require('path')
const fs = require('fs')
var mysql = require('mysql');

// import {dbConnect} from "../../../helpers/dbConnect";
import Quote from '../../../models/QuoteSchema'


export default async (req, res) => {

    let connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'test_db',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });

    connection.connect((err) => {
        if (err) {
            throw new Error(err)
        }
    });


    // await dbConnect()

    const {method, body} = req;

    switch (method) {
        case "POST": {

            let keys = Object.keys(body)
            let values = Object.values(body)

            connection.query(`INSERT INTO users (${keys.join(',')})
                              VALUES (?)`, [values], (error, results) => {
                if (error) {
                    res.status(500).json({
                        message: "Something wend wrong", error: error
                    })
                }

                res.status(200).json({
                    results
                })
            });

            // read to file

            // const filePath = path.join(process.cwd(), '/data', 'quotes.json')
            // const fileData = fs.readFileSync(filePath)
            // const parsedData = JSON.parse(fileData)
            //
            // const quote = {
            //     id: parsedData.length + 1, ...req.body
            // }

            // parsedData.push(quote)
            // fs.writeFileSync(filePath, JSON.stringify(parsedData))

            // ============

            // try {
            //     const quotes = await Quote.create([req.body])
            //     res.status(200).json({
            //         success: true, quotes: quotes
            //     })
            //
            // } catch (error) {
            //     res.status(400).json({success: false, error})
            // }
            break
        }
        case "GET": {

            connection.query(`SELECT *
                              FROM users`, (error, results) => {
                if (error) {
                    return res.status(500).json({
                        message: "Something wend wrong", error: error,
                    })
                }

                return res.status(200).json({
                    results
                })
            });

            // get data from file

            // const filePath = path.join(process.cwd(), '/data', 'quotes.json')
            // const fileData = fs.readFileSync(filePath)
            // const parsedData = JSON.parse(fileData)
            //
            // if (parsedData.length === 0) {
            //     return res.status(400).json({
            //         success: false,
            //         data: "data not found"
            //     })
            // }


            connection.end();

            //
            // // ===================
            //
            // try {
            //     const quotes = await Quote.find({})
            //     res.status(200).json({
            //         success: true,
            //         quotes: quotes
            //     })
            // } catch (error) {
            //     res.status(400).json({success: false, error})
            // }
            break
        }
        default:
            break
    }
}
