"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControler {
    index(req, res) {
        res.json({ text: 'API is in /api/games' });
    }
}
exports.indexControllers = new IndexControler();
