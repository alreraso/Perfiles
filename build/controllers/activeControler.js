"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeControllers = void 0;
const database_1 = __importDefault(require("../database"));
class ActiveControler {
    /*public index(req: Request, res: Response) {
        //res.json({text: 'API is in /api/games'});
        res.send('active')
    }*/
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE perfiles set ? Where id = ?', [req.body, id]); //este no es un delete este solo cambia el estado false para saber que esta inactivo   
            res.json({ text: 'el perfil fue desactivado' });
        });
    }
}
exports.activeControllers = new ActiveControler();
exports.default = exports.activeControllers;