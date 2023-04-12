import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import '../App.css';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-bar-container">
            <Input
                action={{ icon: 'search', onClick: handleSearch }}
                placeholder="Search for images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
        </div>
    );
};

export default SearchBar;
