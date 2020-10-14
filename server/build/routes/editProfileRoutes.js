"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editProfileControler_1 = require("../controllers/editProfileControler");
class EditProfileRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', editProfileControler_1.editProfileControllers.index);
    }
}
const editProfileRoutes = new EditProfileRoute();
exports.default = editProfileRoutes.router;
