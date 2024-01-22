import * as morgan from 'morgan';
import { logger } from './winston.logger';

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
);

export { morganMiddleware };
