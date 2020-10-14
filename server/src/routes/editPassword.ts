import{Router} from 'express';
import {editPasswordControllers} from '../controllers/editPasswordControler';
class EditPasswordRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',editPasswordControllers.index);
    }
}


const editPasswordRoutes = new EditPasswordRoute();
export default editPasswordRoutes.router;