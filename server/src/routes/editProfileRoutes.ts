import{Router} from 'express';
import {editProfileControllers} from '../controllers/editProfileControler';
class EditProfileRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',editProfileControllers.index);
    }
}


const editProfileRoutes = new EditProfileRoute();
export default editProfileRoutes.router;