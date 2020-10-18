import { Request, Response } from 'express';
import pool from '../database'
class ActiveControler {

    /*public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        res.send('active')
    }*/

    public async delete (req:Request,res:Response){
        const{id}=req.params;
        await pool.query('UPDATE perfiles set ? Where id = ?',[req.body,id]);  //este no es un delete este solo cambia el estado false para saber que esta inactivo   
        res.json('el perfil fue desactivado');
        //comment rool
    }

}

export const activeControllers = new ActiveControler();
export default activeControllers;