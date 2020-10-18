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
exports.profileControlers = void 0;
const database_1 = __importDefault(require("../database"));
class ProfileControler {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const perfilesGuardados = yield database_1.default.query('SELECT * FROM perfiles');
            res.json(perfilesGuardados);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const unPerfil = yield database_1.default.query('SELECT * FROM perfiles WHERE id = ?', [id]);
            if (unPerfil.length > 0) {
                return res.json(unPerfil[0]);
            }
            else {
                res.status(404).json('el perfil' + req.params.id + 'no existe');
            }
            console.log(unPerfil);
            res.json('perfil encontrado');
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO perfiles set ?', [req.body]);
            res.json('El perfil fue creado');
        });
    }
}
exports.profileControlers = new ProfileControler();
