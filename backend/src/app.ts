import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

async function start() {
    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.listen(3001, () => {
        console.log(`API is running`)
    });
}

start().catch((error: unknown) => {
    console.error('Failed to start application:', error);
    process.exit(1);
});
