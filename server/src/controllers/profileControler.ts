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
            res.status(404).json({text: 'el perfil' + req.params.id + 'no existe'});
        }
        console.log(unPerfil);
        res.json({text: 'perfil encontrado'});
    }

    public async create (req:Request,res:Response){
        console.log(req.body);
        await pool.query('INSERT INTO perfiles set ?', [req.body]);
        res.json({text: 'El perfil fue creado'});
    }

    public async update (req:Request,res:Response){
        const{id}=req.params;
        await pool.query('UPDATE perfiles set ? Where id = ?',[req.body,id]);        
        res.json({text: 'el perfil fue actualizado'});
    } 

    public async delete (req:Request,res:Response){
        const{id}=req.params;
        await pool.query('DELETE FROM perfiles Where id = ?',[id]);
        res.json({text: 'el perfil fue eliminado'});
    }

       

}

export const profileControlers = new ProfileControler();