"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editControllers = void 0;
class EditControler {
    index(req, res) {
        //res.json({text: 'API is in /api/games'});
        res.send('edit');
    }
}
exports.editControllers = new EditControler();
exports.default = exports.editControllers;
