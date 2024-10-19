import express from 'express';

import * as Student from './student.controller';
import { isLoggedIn } from '../shared/middleware/authorization';
import { upload } from '../shared/config/storage';

export default (router: express.Router) => {
  router.post('/students/create', upload('student-photo').single('photo'), isLoggedIn, Student.addStudent)
  router.get('/students/:studentId', isLoggedIn, Student.getStudentProfile)
  router.put('/students/:studentId/update', isLoggedIn, Student.updateStudentProfile)
  router.delete('/students/:studentId/delete', isLoggedIn, Student.deleteStudentProfile)
};