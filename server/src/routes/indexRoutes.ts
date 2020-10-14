import{Router} from 'express';
import {indexControllers} from '../controllers/indexcontroler';
class IndexRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',indexControllers.index);
    }
}


const indexRoutes = new IndexRoute();
export default indexRoutes.router;