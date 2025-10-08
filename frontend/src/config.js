// frontend/src/config.js
export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api.php'
    : 'https://api.petrucodes.ro/api.php';
