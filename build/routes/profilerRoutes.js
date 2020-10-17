"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class profilerRoute {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('profiler route'));
    }
}
const profilerRoutes = new profilerRoute();
exports.default = profilerRoutes.router;
