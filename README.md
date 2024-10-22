# Overview of React PassOp Application Code

The PassOp application is a simple password manager that allows users to store, retrieve, and manage their passwords securely. It uses a combination of **React** for the frontend and **MongoDB** for the backend, providing persistent storage of passwords.

## Key Features:

### 1. **Frontend (React with Vite)**
- The frontend is built using **Vite+React**, which provides a fast development environment and optimized build process.
- **Toast Notifications** using `react-toastify` are implemented to notify users of important events like saving, deleting, and copying passwords.
- **Dynamic Forms**: Users can input website URLs, usernames, and passwords which are dynamically handled using React `useState`.
- **Password Visibility Toggle**: Users can toggle the visibility of their passwords (i.e., hide or show password text).
- **Edit and Delete Functionality**: Users can edit existing entries, and passwords can be deleted from the stored list.
- **Copy to Clipboard**: Users can copy the password, URL, or username directly to the clipboard.

### 2. **Backend (ExpressJS + MongoDB)**
- The backend uses **ExpressJS** for handling REST APIs that communicate with the MongoDB database.
- **MongoDB** is used to store the passwords securely, providing a persistent storage solution for user data.
- **Body-Parser** is used to parse incoming request bodies in JSON format.
- **UUID** is used to generate unique identifiers for each password entry, ensuring all records are distinct and easy to manage.

## Technologies Used:

1. **Vite+React**: A modern, fast frontend build tool for React applications.
2. **ExpressJS**: A minimalist web framework for handling API requests.
3. **MongoDB**: NoSQL database for storing user passwords securely.
4. **UUID**: Generates unique identifiers for each password entry.
5. **Body-Parser**: Parses the incoming request body to handle data from the frontend.

