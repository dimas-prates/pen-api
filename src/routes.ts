import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
// import { BadRequestError, ErrorApi } from "./helpers/error-api";

const routes = Router();
routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.get('/room/:idRoom', new RoomController().listOne)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
// routes.get('/', async (req, res) => {
//     throw new ErrorApi('Erro forçado', 404)
//     throw new BadRequestError('not found')
// })
export default routes