import { Request, Response } from 'express';
import pool from '../database'
class ProfileControler {

    public async list(req: Request, res: Response) {
       const perfilesGuardados = await pool.query('SELECT * FROM perfiles');
       res.json(perfilesGuardados);
    }

    public async getOne(req: Request, res: Response) {
        const {id} =req.params;
        const unPerfil = await pool.query('SELECT * FROM perfiles WHERE id = ?',[id]);
        if(unPerfil.length > 0){
            return res.json(unPerfil[0]);
        }else{
            res.status(404).json('el perfil' + req.params.id + 'no existe');
        }
        console.log(unPerfil);
        res.json('perfil encontrado');
    }

    public async create (req:Request,res:Response){
        console.log(req.body);
        await pool.query('INSERT INTO perfiles set ?', [req.body]);
        res.json('El perfil fue creado');
    }
      

}

export const profileControlers = new ProfileControler();