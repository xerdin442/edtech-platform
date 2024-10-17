import 'express-session';

import { JwtPayload } from 'jsonwebtoken';

declare module 'express-session' {
  interface SessionData {
    school: JwtPayload;
    email: string
  }
}