import{Router} from 'express';
import {editPasswordControllers} from '../controllers/editPasswordControler';
class EditPasswordRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/',editPasswordControllers.index);
        this.router.put('/:id',editPasswordControllers.update);
    }
}


const editPasswordRoutes = new EditPasswordRoute();
export default editPasswordRoutes.router;