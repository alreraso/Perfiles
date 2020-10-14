import{Router} from 'express';
import {gamesControllers} from '../controllers/gamesControler';
class GamesRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',gamesControllers.index);
    }
}


const gamesRoutes = new GamesRoute();
export default gamesRoutes.router;