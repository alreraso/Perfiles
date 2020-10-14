import { Request, Response } from 'express';
import pool from '../database'
class ActiveControler {

    public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        res.send('active')
    }

}

export const activeControllers = new ActiveControler();
export default activeControllers;