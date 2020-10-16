"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileControler_1 = require("../controllers/profileControler");
class ProfilerRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', profileControler_1.profileControlers.list);
        this.router.get('/:id', profileControler_1.profileControlers.getOne);
        this.router.post('/', profileControler_1.profileControlers.create);
        //this.router.put('/:id',profileControlers.update);
        //this.router.delete('/:id',profileControlers.delete);
    }
}
const profilerRoutes = new ProfilerRoute();
exports.default = profilerRoutes.router;
