"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
const activeRoutes_1 = __importDefault(require("./routes/activeRoutes"));
const editProfileRoutes_1 = __importDefault(require("./routes/editProfileRoutes"));
const editPassword_1 = __importDefault(require("./routes/editPassword"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 5002);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/profiles', profileRoutes_1.default);
        this.app.use('/active/profile', activeRoutes_1.default);
        this.app.use('/edit/profile', editProfileRoutes_1.default);
        this.app.use('/edit/password', editPassword_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
