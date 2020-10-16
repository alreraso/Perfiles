import{Router} from 'express';
import {editProfileControllers} from '../controllers/editProfileControler';
class EditProfileRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //this.router.get('/',editProfileControllers.index);
        this.router.put('/:id',editProfileControllers.update);
    }
}


const editProfileRoutes = new EditProfileRoute();
export default editProfileRoutes.router;