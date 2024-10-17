# Authentication

## Register

`POST` `/auth/register`

Creates a new school account.

**Request Parameters**

```json
{
  "name": "Example International School",
  "email": "school@example.com",
  "password": "example12!",
  "confirmPassword": "example12!"
}
```

**Response Body**

```json
{
  "message": "Registration successful!",
  "school": {
    "name": "Example International School",
    "email": "school@example.com",
    "logo": "https://res.cloudinary.com/djqrqzart/image/upload/v1729156440/download_qk9oyi.png",
    "password": "$2a$12$7Qu.NnF2LKqxkDDU5ayTjOJ5IwlfJVEoIGd51Nq42/6UCSrD6PpwC",
    "balance": 0,
    "pin": 0,
    "_id": "67111d9a38049bf9f1d850c0",
    "__v": 0,
    "otp": 6951,
    "otpExpiration": 1729178538938,
    "otpSubject": "Email Verification"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTExZDlhMzgwNDliZjlmMWQ4NTBjMCIsImlhdCI6MTcyOTE3NDkzOSwiZXhwIjoxNzI5MTg1NzM5fQ.-9KNgGF09UL9WcIXXNX-EZHVOHWOqXUeqHlgADyFOy0"
}
```

## Login

`POST` `/auth/login`

Sign in to an existing school account.

**Request Parameters**

```json
{
  "email": "school@example.com",
  "password": "example12!"
}
```

**Response Body**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTEyZTE2MTk5OWMzZGM4YzZmYjE0YSIsImlhdCI6MTcyOTE3OTY0NywiZXhwIjoxNzI5MTkwNDQ3fQ._xlpsz0iusgPUbzjaijPH7ikV7cZsPXCmMpqLl3heYY"
}
```

## Logout

`authorized` `POST` `/auth/logout`

Sign out of an existing school account.

**Request Parameters**

None

**Response Body**

```json
{
  "message": "You logged out"
}
```

## OTP Verification

`POST` `/auth/verify-otp`

Verify OTP for email verification or password reset.

**Request Parameters**

```json
{
  "otp": 6951
}
```

**Response Body**

```json
{
  "message": "OTP verification successful!"
}
```

## Resend OTP

`POST` `/auth/resend-otp`

Request that the OTP be re-sent.

**Request Parameters**

None

**Response Body**

```json
{
  "message": "Another OTP has been sent to your email"
}
```


## Password Reset

`POST` `/auth/reset`

Request for a password reset.

**Request Parameters**

```json
{
  "email": "school@example.com"
}
```

**Response Body**

```json
{
  "message": "Password reset OTP has been sent to your email"
}
```

## Change Password

`POST` `/auth/change-password`

Change the password of an existing account.

**Request Parameters**

```json
{
    "password": "example12!",
    "confirmPassword": "example12!"
}
```

**Response Body**

```json
{
  "message": "Password reset successful"
}
```

