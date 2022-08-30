import {Request, Response, NextFunction} from 'express';
import logging from '../config/logging';
const NAMESPACE = 'Sample Controller';
const NAMESPACE2 = 'Sample Controller 2'

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        message: 'pong'
    });
};

const hemlo = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE2, `hemlo check route called`);
    return res.status(200).json({
        message: 'hemlo shoebum'
    });
}

export default {
    sampleHealthCheck,
    hemlo
};