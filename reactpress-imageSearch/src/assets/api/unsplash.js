import axios from 'axios';

const accessKey = 'SJBJRroT26oF9AgwevxBf6Hb9BjWwwN-X6-BsttWazk';

export const fetchImages = async (searchTerm, page) => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=10&page=${page}&client_id=${accessKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export { accessKey };
