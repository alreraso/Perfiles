import { Request, Response } from 'express';
import pool from '../database'
class EditProfileControler {

    public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        res.send('edit profiel')
    }

}

export const editProfileControllers = new EditProfileControler();
export default editProfileControllers;