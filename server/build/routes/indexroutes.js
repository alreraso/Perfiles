"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexcontroler_1 = require("../controllers/indexcontroler");
class IndexRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexcontroler_1.indexControllers.index);
    }
}
const indexRoutes = new IndexRoute();
exports.default = indexRoutes.router;
