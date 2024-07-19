// src/movieService.js
import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const response = await axios.get('https://api.example.com/movies'); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
