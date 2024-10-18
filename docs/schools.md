# Schools

## Profile

`authorized` `GET` `/profile`

Fetch school details.

**Request Parameters**

None

**Response Body**

```json
{
  "school": {
    "bankDetails": {
      "accountName": "Example Intl School",
      "accountNumber": "1234567890",
      "bankName": "Example Bank"
    },
    "_id": "67112e161999c3dc8c6fb14a",
    "name": "Example International School",
    "email": "school@example.com",
    "logo": "https://res.cloudinary.com/djqrqzart/image/upload/v1729215388/school-logo/2024-10-18T01-36-28.148Z-smiley-eyes.jpg.jpg",
    "balance": 357230,
    "students": 270,
    "employees": 41,
    "__v": 0,
    "address": "12, School Road, Wakanda",
    "phone": "09049892368",
    "recipient": "RCP_xbouwjam8cketll"
  }
}
```

## Profile Update

`authorized` `PUT` `/profile/update`

Update school details.

**Request Parameters**

```json
{
  "accountName": "Example Intl School Fees Account",
  "accountNumber": "9876543210",
  "bankName": "Example Bank",
  "name": "Example International School",
  "email": "school@example.com",
  "logo": "~~IMAGE UPLOAD~~",
  "address": "12, School Road, Beside City Metropolis, Wakanda",
  "phone": "09049892368"
}
```

**Response Body**

```json
{
  "message": "Profile updated successfully",
  "school": {
    "bankDetails": {
      "accountName": "Example Intl School Fees Account",
      "accountNumber": "9876543210",
      "bankName": "Example Bank"
    },
    "_id": "67112e161999c3dc8c6fb14a",
    "name": "Example International School",
    "email": "school@example.com",
    "logo": "https://res.cloudinary.com/djqrqzart/image/upload/v1729215388/school-logo/2024-10-18T01-36-28.148Z-smiley-eyes.jpg.jpg",
    "balance": 357230,
    "students": 270,
    "employees": 41,
    "__v": 0,
    "address": "12, School Road,Beside City Metropolis, Wakanda",
    "phone": "09049892368",
    "recipient": "RCP_xbouwjam8cketll"
  }
}
```

## Delete Account

`authorized` `DELETE` `/profile/delete`

Delete an existing school account.

**Request Parameters**

None

**Response Body**

```json
{
  "message": "Account deleted successfully"
}
```
