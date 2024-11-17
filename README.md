# TransactionsAPI

A simple Payments Simulation built with Node.js, Express, and MongoDB. This application allows users to sign up, log in, send money, and check their balance.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contact Me](#contact-me)

## Features

- User registration and login
- JWT-based authentication
- Send money to other users
- Check account balance
- List all users (excluding the authenticated user)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- CORS
- dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RealMohith/Simple_Transaction

2. Navigate to the project directory:
    ```bash
    cd TransactionsAPI

3. Install dependencies:
    ```bash
    npm install

4. Create a .env file in the root directory and add the following environment variables:

    ```text
    PORT=3000
    MONGODB_STRING='mongodb://localhost:27017/paytm'
    JWT_SECRET='your_jwt_secret'


5. To start the server, run the following command:

    ```bash
    node server.js
## API Endpoints

### User Endpoints

- **Sign Up**
  - **Method:** `POST`
  - **Endpoint:** `/api/v1/signup`
  - **Body:** 
    ```json
    {
      "name": "",
      "email": ""
    }
    ```

- **Login**
  - **Method:** `POST`
  - **Endpoint:** `/api/v1/login`
  - **Body:** 
    ```json
    {
      "name": "",
      "email": ""
    }
    ```

- **Get Users List**
  - **Method:** `GET`
  - **Endpoint:** `/api/v1/userslist`
  - **Headers:** 
    ```
    Authorization: Bearer <token>
    ```

### Account Endpoints

- **Send Money**
  - **Method:** `POST`
  - **Endpoint:** `/api/v1/sendmoney/:friendname/:amount`
  - **Headers:** 
    ```
    Authorization: Bearer <token>
    ```

- **Get Balance**
  - **Method:** `GET`
  - **Endpoint:** `/api/v1/balance`
  - **Headers:** 
    ```
    Authorization: Bearer <token>
    ```

## Environment Variables

- **PORT:** The port on which the server will run (default is 3000).
- **MONGODB_STRING:** The connection string for MongoDB.
- **JWT_SECRET:** Secret key used for signing JWT tokens.

## Contact Me

If you have any questions related to the project feel free to reach out to me:

- **Email**: mohithgowdait@gmail.com
- **GitHub**: [https://github.com/RealMohith](https://github.com/RealMohith)
- **LinkedIn**: [https://www.linkedin.com/in/mohithgowdar](https://linkedin.com/in/mohithgowdar)
