"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesControler_1 = require("../controllers/gamesControler");
class GamesRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesControler_1.gamesControllers.index);
    }
}
const gamesRoutes = new GamesRoute();
exports.default = gamesRoutes.router;
