import {dbConnect} from "../../../helpers/dbConnect";
import Quote from '../../../models/QuoteSchema'

export default async (req, res) => {

    await dbConnect()

    const {method, body} = req;

    switch (method) {
        case "POST": {

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
