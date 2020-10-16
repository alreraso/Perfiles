"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activeControler_1 = require("../controllers/activeControler");
class ActiveRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.get('/',activeControllers.index);
        this.router.put('/:id', activeControler_1.activeControllers.delete);
    }
}
const activeRoutes = new ActiveRoute();
exports.default = activeRoutes.router;
