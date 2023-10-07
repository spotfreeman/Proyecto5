import jwt from "jsonwebtoken"

export const authRequire = (req, res, next) => {
    try {
        // colocar nombre de la Autorizacion de Postman
        const { authorization } = req.headers
        const decoded = jwt.verify(authorization, process.env.SECRET_KEY)
        const actualTime = (new Date() / 1000)

        if (actualTime > decoded.exp) {
            return res.status(401).json({ message: 'Token expirado...' })
        }
        req.data = decoded.data

    } catch (error) {
        return res.status(401).json(error)
    }

    next()
}