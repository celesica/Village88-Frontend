import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import ImageGallery from './components/ImageGallery';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <div className="App">
        <SearchBar onSearch={setSearchTerm} />
        <ImageGallery searchTerm={searchTerm} />
      </div>
  );
}

export default App;
