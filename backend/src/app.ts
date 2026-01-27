import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { envConfig } from './configs/env.config';
import orderRoute from './routes/order.route';
import { errorHandler } from './middlewares/error-handler.middleware';

    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.use(`/${envConfig.apiPrefix}/order`, orderRoute);

    app.get(`/${envConfig.apiPrefix}`, (req: Request, res: Response) => {
        res.status(200).json({ message: 'Hello World!' });
    });

    app.use(errorHandler);

    app.listen(envConfig.apiPort, () => {
        console.log(`API is running on:\t http://localhost:${envConfig.apiPort}/${envConfig.apiPrefix}`);
    });

