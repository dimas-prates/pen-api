import express from "express";
import 'express-async-errors'
import morgan from "morgan";
import { AppDataSource } from "./data-source";
import routes from './routes'
import { errorHandling } from './middlewares/error'

const appPort = process.env.PORT || 3000
AppDataSource.initialize().then(() => {
    const app = express();
    app.use(morgan('dev'))
    app.use(express.json())
    // app.get("/", (req, res) => {
    //     return res.json("App initialized")
    // })
    app.use(routes)
    app.use(errorHandling)
    return app.listen(appPort, () => { console.log(`Application located at "${__dirname}" and listening on port: ${appPort}`) })
})