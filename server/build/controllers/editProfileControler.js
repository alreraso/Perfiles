"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProfileControllers = void 0;
class EditProfileControler {
    index(req, res) {
        //res.json({text: 'API is in /api/games'});
        res.send('edit profiel');
    }
}
exports.editProfileControllers = new EditProfileControler();
exports.default = exports.editProfileControllers;
