import express from 'express';

import * as School from './school.controller';
import { isLoggedIn } from '../shared/middleware/authorization';
import { upload } from '../shared/config/storage';
import {
  handleValidationErrors,
  validateProfileUpdate,
  validateLogin,
  validatePasswordReset,
  validateSignUp
} from '../shared/middleware/validation';

export default (router: express.Router) => {
  // Authentication
  router.post('/auth/register', validateSignUp, handleValidationErrors, School.register);
  router.post('/auth/login', validateLogin, handleValidationErrors, School.login);
  router.post('/auth/logout', isLoggedIn, School.logout);
  router.post('/auth/reset', School.resetPassword)
  router.post('/auth/verify-otp', School.verifyOTP)
  router.post('/auth/resend-otp', School.resendOTP)
  router.post('/auth/change-password', validatePasswordReset, handleValidationErrors, School.changePassword)

  // Profile
  router.get('/profile', isLoggedIn, School.getProfile)
  router.put('/profile/update', upload('school-logo').single('logo'), isLoggedIn, validateProfileUpdate, handleValidationErrors, School.updateProfile)
  router.delete('/profile/delete', isLoggedIn, School.deleteAccount)
};