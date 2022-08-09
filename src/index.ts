import express from "express";
import { AppDataSource } from "./data-source";
import routes from './routes'
const appPort = 3000 || process.env.PORT
AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json())
    // app.get("/", (req, res) => {
    //     return res.json("App initialized")
    // })
    app.use(routes)
    return app.listen(appPort, () => { console.log(`Application located at "${__dirname}" and listening on port: ${appPort}`) })
})