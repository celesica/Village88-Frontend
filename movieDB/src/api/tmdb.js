import axios from 'axios';

const apiKey = 'c49480f7266cd1ae3c82332275613979';
const baseURL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
    baseURL: baseURL,
});

export const searchMovies = async (query) => {
    try {
        const response = await tmdb.get(`/search/movie?api_key=${apiKey}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.error('Failed to fetch movies', error);
        return [];
    }
};

export const fetchGenres = async () => {
    try {
        const response = await tmdb.get(`/genre/movie/list?api_key=${apiKey}`);
        return response.data.genres;
    } catch (error) {
        console.error('Failed to fetch genres', error);
        return [];
    }
};

export default tmdb;
