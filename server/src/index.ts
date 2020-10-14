import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//import indexRoutes from './routes/indexRoute';
import indexRoutes from './routes/indexRoutes'
import gamesRoutes from './routes/gamesRoutes';
import profileRoutes from './routes/profileRoutes';
import activeRoutes from './routes/activeRoutes';
import editProfileRoutes from './routes/editProfileRoutes';
import editPasswordRoutes from './routes/editPassword';

class Server {

    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 5002);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes);
        this.app.use('/profiles', profileRoutes);
        this.app.use('/active/profile', activeRoutes);
        this.app.use('/edit/profile', editProfileRoutes);
        this.app.use('/edit/password', editPasswordRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();

