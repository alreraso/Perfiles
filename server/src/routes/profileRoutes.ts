import{Router} from 'express';
import {profileControlers} from '../controllers/profileControler';

class ProfilerRoute{

    router :Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',profileControlers.list);
        this.router.get('/:id',profileControlers.getOne);
        this.router.post('/',profileControlers.create);
        this.router.put('/:id',profileControlers.update);
        this.router.delete('/:id',profileControlers.delete);
    }
}


const profilerRoutes = new ProfilerRoute();
export default profilerRoutes.router;