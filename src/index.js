import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dbConnection from '../src/db/index.js';

const app = express();


const PORT = process.env.SERVER_PORT || 3500;

(async function(){
    /**
     * Self executing function to startup application
     */

    app.use(express.json());

    app.use(express.urlencoded({extended: false})) // convert html body form parser

    app.use(cors({
        method: ["PUT", "POST", "GET", "DELETE", "PATCH"],
        credential: true,
        origin: process.env.CORS_ORIGIN.split(","),
        allowedHeaders: ["Content-Type", "Authorization", "Accept-X-Idempotency-Key"] //Accept-X-Idempotency-Key will be used for our idempotency_key
    }))

    app.use(helmet()) // security middleware - prevent unnecessary headers
    app.use(compression()) // compress response data

    app.listen(PORT, async function(){
        console.log(`Server is running on port ${PORT}`)
        console.log(`Environment: ${process.env.NODE_ENV}`)
        await dbConnection(); // db connnection
    })
})();