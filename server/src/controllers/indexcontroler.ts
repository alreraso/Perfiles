import { Request, Response } from 'express';
import pool from '../database'
class IndexControler {

    public index(req: Request, res: Response) {
        res.json({text: 'API is in /api/games'});
    }

}

export const indexControllers = new IndexControler();