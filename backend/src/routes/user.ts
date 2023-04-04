import { Router } from "express";
import UserController from "../controllers/UserController";
import {authorization} from '../middlewares';
import GetOneSolicitacao from "../services/GetOneSolicitacao";
import GetAllSolicitacao from "../services/GetAllSolicitacao";
import ArchiveSolicitacao from "../services/ArchiveSolicitacao";

const routes = Router();

routes.post('/create', UserController.create);
routes.put('/', authorization, UserController.update);
routes.get('/solicitacao', GetOneSolicitacao.getSolicitacaoById)
routes.get('/all', GetAllSolicitacao.getAllSolicitacao)
routes.put('/arquivo', ArchiveSolicitacao.archiveSolicitacao)
export default routes;