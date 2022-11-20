import { sessionsCollection } from "../database/db.js"

export default async function validateToken(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    try {
        const session = await sessionsCollection.findOne({token})
        req.session = session
        req.token = token
    } catch (error) {
        res.sendStatus(401)
    }
    
    next()
}