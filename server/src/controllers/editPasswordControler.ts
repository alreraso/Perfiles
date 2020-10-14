import { Request, Response } from 'express';
import pool from '../database'
class EditControler {

    public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        res.send('edit')
    }

}

export const editPasswordControllers = new EditControler();
export default editPasswordControllers;