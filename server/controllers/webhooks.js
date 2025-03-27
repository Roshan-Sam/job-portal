import { Webhook } from "svix";
import User from "../models/User.js";

// API controller function to manage clerk user with database

export const clerkWebhooks = async (req, res) => {
    try {
        // create a svix  instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // verifyng headers

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers['svix-timestamp'],
            "svix-signature": req.headers['svix-signature'],
        })

        // getting data from req body

        const { data, type } = req.body

        // switch case for different events 

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + ' ' + data.last_name,
                    image: data.image_url,
                    resume: ''
                }
                await User.create(userData)
                res.json({})
                break;
            }
            case 'user.updated': {

            }
            case 'user.deleted': {

            }
            default:
                break;
        }
    } catch (error) {

    }
}