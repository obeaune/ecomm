import express from 'express';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import './middlewares/authStrategy.js';

db.on('error', console.log.bind(console, 'Connection error'));

db.once('open', () => console.log('Database connection was successful'));

const swaggerDocument = YAML.load('./swagger/order.yaml');

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(passport.initialize());
routes(app);

export default app;
