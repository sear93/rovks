import {dbConnect} from "../../../helpers/dbConnect";
import Quote from './../../../models/QuoteSchema'

export default async (req, res) => {

    const {query: {id}, method} = req

    await dbConnect();

    switch (method) {
        case "GET": {
            try {
                const user = await Quote.findOne({_id: id})

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
            try {
                const users = await Quote.deleteOne({_id: id})

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
