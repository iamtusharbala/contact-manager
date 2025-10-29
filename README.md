# Contact Manager API

A RESTful API for managing contacts built with Node.js and Express.

## Features

- User authentication (login/register)
- Create, read, update, and delete contacts
- Secure endpoints with authentication
- MongoDB database integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd contact-manager
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

## API Endpoints

### Authentication

#### Register a new user
```http
POST /auth/register
```

#### Login
```http
POST /auth/login
```

### Contacts

#### Get all contacts
```http
GET /contacts
```

#### Create a new contact
```http
POST /contacts
```

#### Get a specific contact
```http
GET /contacts/:id
```

#### Update a contact
```http
PUT /contacts/:id
```

#### Delete a contact
```http
DELETE /contacts/:id
```

## Error Handling

The API includes a global error handler that provides consistent error responses across all endpoints.

## Security

- Authentication using JWT tokens
- Environment variables for sensitive data
- Password hashing for user security

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.