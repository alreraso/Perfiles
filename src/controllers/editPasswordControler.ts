import { Request, Response } from 'express';
import pool from '../database'
class EditControler {

    /*public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        res.send('edit')
    }*/

    public async update (req:Request,res:Response){
        const{id}=req.params;
        await pool.query('UPDATE perfiles set ? Where id = ?',[req.body,id]);        
        //res.json({text: 'el perfil fue actualizado'});
    } 

}

export const editPasswordControllers = new EditControler();
export default editPasswordControllers;