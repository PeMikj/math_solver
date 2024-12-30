// src/api.js
export const fetchWithAuth = async (url, options = {}) => {
    const token = localStorage.getItem('token');
  
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
  
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    return response;
  };