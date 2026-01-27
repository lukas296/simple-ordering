import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
    apiPort: process.env.API_PORT || 3001,
    apiPrefix: process.env.API_PREFIX || 'api',
};
