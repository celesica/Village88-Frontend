import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import '../App.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSearch}>
                <Input
                    action={{ icon: 'search', onClick: handleSearch }}
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(e);
                        }
                    }}
                />
            </form>
        </div>
    );
};

export default SearchBar;
