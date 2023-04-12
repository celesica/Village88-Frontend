import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieGallery from './components/MovieGallery';
import { searchMovies, fetchGenres } from './api/tmdb';

function App() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchAllGenres = async () => {
            const fetchedGenres = await fetchGenres();
            setGenres(fetchedGenres);
        };
        fetchAllGenres();
    }, []);

    const handleSearch = async (searchTerm) => {
        const results = await searchMovies(searchTerm);
        setMovies(results);
    };

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />
            <MovieGallery movies={movies} genres={genres} />
        </div>
    );
}

export default App;