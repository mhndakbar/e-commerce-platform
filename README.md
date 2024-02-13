# E-commerce Platform

An e-commerce application enabling users to register, create orders, and seamlessly make purchases.

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

- Without Docker
  run:

  ```
  npm start
  ```

  now you can start using the application on `http://localhost:3000`

- Without Docker
  run:
  ```
  docker-compose up --build
  ```
  The URL will be just `http://localhost`

## Usage

### Endpoints

- Authentication

1.  POST /api/auth/register

    - Description: Register a new user
    - Request Parameter: username*, password*, email\*
    - Response Parameter: User object

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

2.  POST /api/auth/login

    - Description: Login an existing user
    - Request Parameter: username*, password*
    - Response Parameter: User oject, token

    ##### Request Body params:

    ```
      {
          "username": "mhnd",
          "password": "mhnd"
      }
    ```

    ##### Response:

    ```
      {
        "_id": "65cb1f08b794408c5df95788",
        "username": "mhnd",
        "email": "mhnd@gmail.com",
        "isAdmin": false,
        "createdAt": "2024-02-13T07:49:28.239Z",
        "updatedAt": "2024-02-13T07:49:28.239Z",
        "__v": 0,
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IxZjA4Yjc5NDQwOGM1ZGY5NTc4OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDc4MTE0MDIsImV4cCI6MTcwODA3MDYwMn0.ggJbFZjBJMNUZyKkFlBaArSb19LnbFdg6ogLh6anspU"
      }
    ```

- Products

  ##### NOTE: for CRUD operations please include the token in the request header and make sure the user has `isAdmin` attribute as true, in my case I've updated the user from mongoDB dashboard

  ##### token example:

  ```
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2IxZjA4Yjc5NDQwOGM1ZGY5NTc4OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDc4MTE0MDIsImV4cCI6MTcwODA3MDYwMn0.ggJbFZjBJMNUZyKkFlBaArSb19LnbFdg6ogLh6anspU
  ```

1.  POST /api/products

    - Description: Create a new product
    - Request Parameter: title*, description*, quantity*, price*
    - Request Header: token\* + user is admin
    - Response Parameter: Product object

    ##### Request Body params:

    ```
    {
      "title": "Apple Watch",
      "description": "smart Watch",
      "quantity": 10,
      "price": 150
    }
    ```

    ##### Response:

    ```
    {
      "title": "Apple Watch",
      "description": "smart Watch",
      "quantity": 10,
      "price": 150,
      "_id": "65ca7cf863dbe4b3f1c8b8fa",
      "createdAt": "2024-02-12T20:18:00.451Z",
      "updatedAt": "2024-02-12T20:18:00.451Z",
      "__v": 0
    }
    ```

2.  PUT /api/products/:id

    - Description: Update product
    - Request Parameter: id\* (product id)
    - Request Header: token\* + user is admin
    - Response Parameter: Product object

    ##### Request Body params:

    ```
    {
      "title": "Apple Watch",
      "description": "smart Watch",
      "quantity": 10,
      "price": 150
    }
    ```

    ##### Response:

    ```
    {
      "title": "Apple Watch",
      "description": "smart Watch",
      "quantity": 10,
      "price": 150,
      "_id": "65ca7cf863dbe4b3f1c8b8fa",
      "createdAt": "2024-02-12T20:18:00.451Z",
      "updatedAt": "2024-02-12T20:18:00.451Z",
      "__v": 0
    }
    ```

3.  DELETE /api/products/:id

    - Description: Delete product
    - Request Parameter: id\* (product id)
    - Request Header: token\* + user is admin
    - Response Parameter: Success Message

4.  GET /api/products/find/:id

    - Description: find a product
    - Request Parameter: id\* (product id)
    - Response Parameter: Product object

5.  GET /api/products

    - Description: List products
    - Request Parameter: page, limit
    - Response Parameter: Products list

- Carts

1.  POST /api/carts

    - Description: Create a new cart
    - Request Parameter: userId\*, products
    - Request Header: token\*
    - Response Parameter: Cart object

    ##### Request Body params:

    ```
      {
        "userId": "65cb1f08b794408c5df95788",
        "products": [
            {
                "productId": "65ca7cf863dbe4b3f1c8b8fa",
                "quantity": 4
            }
          ]
      }
    ```

    ##### Response:

    ```
      {
        "userId": "65cb1f08b794408c5df95788",
        "products": [
            {
                "productId": "65ca7cf863dbe4b3f1c8b8fa",
                "quantity": 4,
                "_id": "65cb28dc7083440923d94a32"
            }
        ],
        "_id": "65cb28dc7083440923d94a31",
        "createdAt": "2024-02-13T08:31:24.458Z",
        "updatedAt": "2024-02-13T08:31:24.458Z",
        "__v": 0
      }
    ```

2.  PUT /api/carts/:id

    - Description: Update cart
    - Request Parameter: id\* (cart id)
    - Request Header: token\*
    - Response Parameter: Cart object

3.  DELETE /api/carts/:id

    - Description: Delete cart
    - Request Parameter: id\* (cart id)
    - Request Header: token\*
    - Response Parameter: Cart object

4.  GET /api/carts/find/:id

    - Description: find cart
    - Request Parameter: id\* (cart id)
    - Request Header: token\*
    - Response Parameter: Cart object

- Orders

1.  POST /api/orders

    - Description: Create a new order
    - Request Parameter: cartId\*
    - Request Header: token\*
    - Response Parameter: Order object

    ##### Request Body params:

    ```
      {
        "cartId": "65cb28dc7083440923d94a31"
      }
    ```

    ##### Response:

    ```
      {
        "userId": "65cb1f08b794408c5df95788",
        "products": [
            {
                "productId": "65ca7cf863dbe4b3f1c8b8fa",
                "quantity": 4,
                "_id": "65cb28dc7083440923d94a32"
            }
        ],
        "status": "pending",
        "amount": 600,
        "_id": "65cb2adf891c6385fe0917bd",
        "createdAt": "2024-02-13T08:39:59.789Z",
        "updatedAt": "2024-02-13T08:39:59.789Z",
        "__v": 0
      }
    ```

2.  PUT /api/orders/:id

    - Description: Update order
    - Request Parameter: id\* (order id)
    - Request Header: token\* + user is admin
    - Response Parameter: Order object

3.  DELETE /api/orders/:id

    - Description: Delete order
    - Request Parameter: id\* (order id)
    - Request Header: token\* + user is admin
    - Response Parameter: order object

4.  GET /api/orders/find/:userId

    - Description: find order
    - Request Parameter: id\* (order id)
    - Request Header: token\*
    - Response Parameter: order object

- Payments

1.  POST api/payments/purchase/:id

    - Description: Make a new purchase
    - Request Parameter: id\* (order id)
    - Request Header: token\*
    - Response Parameter: success message

    ##### Example response:

    ```
      "You've successfully placed your order!"
    ```

## Special Thanks

I would like to express my sincere gratitude for giving me the opportunity to work on this project.
