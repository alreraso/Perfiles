import { Request, Response } from 'express';
import pool from '../database'
class GamesControler {

    public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        //pool.query('DESCRIBE perfiles');
        res.json('games');
    }

}

export const gamesControllers = new GamesControler();
export default gamesControllers;