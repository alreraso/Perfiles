"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editPasswordControler_1 = require("../controllers/editPasswordControler");
class EditPasswordRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', editPasswordControler_1.editPasswordControllers.index);
    }
}
const editPasswordRoutes = new EditPasswordRoute();
exports.default = editPasswordRoutes.router;
