# Introduction

The server host is https://edudesks.onrender.com/api

# Authorization

For endpoints flagged as `authorized`, an authorization header is required. The header value is the `token` value returned as part of the response from the [Register]() and [Login]() endpoints. The header format is as follows;

```json
{
  "Authorization": "Bearer TOKEN"
}
```

Replace `TOKEN` with the actual token value. The token obtained from this header is used to authenticate requests and create sessions that last for 3 hours. If the token is expired, an error message of status `401` is displayed;

```json
{
  "error": "Your session has expired. Log in to continue"
}
```

If the format of the header value is incorrect, an error message of status `400` is displayed;

```json
{
  "error": "Access denied. Invalid header!"
}
```

If the token value is incorrect, an error message of status `400` is displayed;

```json
{
  "error": "Access denied. Invalid token!"
}
```

# Form Inputs

Form inputs are sanitized and validated. If the input values do not meet the validation criteria, an error message of status `422` is displayed in this format;

```json
{
  "error": "Validation error message"
}
```

# Images

All image uploads must be less than 5MB. Only `png`, `heic`, `jpeg`, `webp` and `heif` formats are supported. If an incorrect format is uploaded, an error is thrown.
