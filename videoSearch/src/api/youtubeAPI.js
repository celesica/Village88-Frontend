import axios from 'axios';

const KEY = 'AIzaSyAirXzH3Br-dRvgWxqt9YFip49zN6Lf2to';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});
