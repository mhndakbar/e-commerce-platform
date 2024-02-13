# E-commerce Platform

An E-commerce app where users can register, create orders, and make a purchase

## Table of Contents

- [Requirements](#requirements)
- [Installation & Configurations](#installation)
- [Running the app](#Running-the-app)
- [Usage](#usage)

## Requirements

To run this project, you need to have the following tools installed:
- [Node js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker & Docker compose](https://docs.docker.com/compose/install/)
  
Optional:
- [Postman](https://www.postman.com/downloads/)

## Installation

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Set up environment variables**

  - Create a `.env` file in the root directory.

  - Add the following environment variables to the `.env` file and make sure to replace the values:

     ```plaintext
     MONGO_URL = YOUR_MONGO_DB_URL
    PORT = 3000
    PASS_SEC = YOUR_PASS_SEC_KEY
    JWT_SEC = YOUR_JWT_SEC_KEY
     ```

## Running the app
  - Without docker
    run:
    ```
    npm start
    ```
    now you can start using the application on `http://localhost:3000`
    
  - With Docker
    run:
    ```
    docker-compose up --build
    ```
    The URL will be just `http://localhost`

## Usage
### Endpoints
- Authentication
 1. POST /api/auth/register
    - Description: Registers a new user.
    - Request Parameter: username*, password*, email*
    - Response Parameter: User Object
    ##### Example:
    ##### Request Body params:
    ```
    {
        "username": "mhnd",
        "password": "mhnd",
        "email": "mhnd@gmail.com"
    
    }
    ```
    ##### Response:
    ```
      {
          "username": "mhnd",
          "email": "mhnd@gmail.com",
          "password": "U2FsdGVkX189AHoiz4NfZ0nwnSoQ904UpLCtH4XKhBw=",
          "isAdmin": false,
          "_id": "65cb1f08b794408c5df95788",
          "createdAt": "2024-02-13T07:49:28.239Z",
          "updatedAt": "2024-02-13T07:49:28.239Z",
          "__v": 0
      }
    ```

2. POST /api/auth/register
  - Description: Registers a new user.
  - Request Parameter: username*, password*, email*
  - Response Parameter: User Object
  ##### Example:
  ##### Request Body params:
  ```
{
    "username": "mhnd",
    "password": "mhnd",
    "email": "mhnd@gmail.com"

}
```
##### Response:
```
{
    "username": "mhnd",
    "email": "mhnd@gmail.com",
    "password": "U2FsdGVkX189AHoiz4NfZ0nwnSoQ904UpLCtH4XKhBw=",
    "isAdmin": false,
    "_id": "65cb1f08b794408c5df95788",
    "createdAt": "2024-02-13T07:49:28.239Z",
    "updatedAt": "2024-02-13T07:49:28.239Z",
    "__v": 0
}
```
  
