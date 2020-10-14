"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesControllers = void 0;
class GamesControler {
    index(req, res) {
        //res.json({text: 'API is in /api/games'});
        //pool.query('DESCRIBE perfiles');
        res.json('games');
    }
}
exports.gamesControllers = new GamesControler();
exports.default = exports.gamesControllers;
