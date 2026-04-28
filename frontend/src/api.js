const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://fullstack-productos-backend.onrender.com'
    : '';

export default API_URL;
