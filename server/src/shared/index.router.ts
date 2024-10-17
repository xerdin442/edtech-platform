import express from 'express';

import schoolRouter from '../schools/school.router';

const router = express.Router()

export default (): express.Router => {
  schoolRouter(router)
  
  return router;
}