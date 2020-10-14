"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeControllers = void 0;
class ActiveControler {
    index(req, res) {
        //res.json({text: 'API is in /api/games'});
        res.send('active');
    }
}
exports.activeControllers = new ActiveControler();
exports.default = exports.activeControllers;
