import{Router} from 'express';
import {activeControllers} from '../controllers/activeControler';
class ActiveRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',activeControllers.index);
    }
}


const activeRoutes = new ActiveRoute();
export default activeRoutes.router;