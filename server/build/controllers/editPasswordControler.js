"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPasswordControllers = void 0;
class EditControler {
    index(req, res) {
        //res.json({text: 'API is in /api/games'});
        res.send('edit');
    }
}
exports.editPasswordControllers = new EditControler();
exports.default = exports.editPasswordControllers;
