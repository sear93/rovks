// const path = require('path')
// const fs = require('fs')

import {dbConnect} from "../../../helpers/dbConnect";
import Quote from '../../../models/QuoteSchema'

export default async (req, res) => {

    await dbConnect()

    const {method} = req;

    switch (method) {
        case "POST": {

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

            try {
                const quotes = await Quote.create([body])
                res.status(200).json({
                    success: true, quotes: quotes
                })

            } catch (error) {
                res.status(400).json({success: false, error})
            }
            break
        }
        case "GET": {

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
            //
            // // ===================

            try {
                const quotes = await Quote.find({})
                res.status(200).json({
                    success: true,
                    quotes: quotes
                })
            } catch (error) {
                res.status(400).json({success: false, error})
            }
            break
        }
        default:
            break
    }
}
