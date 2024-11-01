// custom.d.ts
import { Request as ExpressRequest } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    filter: any;
  }
}
