const formatViewCount = (viewCount) => {
    let result = '';
    if (viewCount < 1000) {
        result = viewCount;
    } else if (viewCount < 10000) {
        result = `${(viewCount / 1000).toFixed(1)}K`;
    } else if (viewCount < 1000000) {
        result = `${Math.round(viewCount / 1000)}K`;
    } else if (viewCount < 10000000) {
        result = `${(viewCount / 1000000).toFixed(1)}M`;
    } else {
        result = `${Math.round(viewCount / 1000000)}M`;
    }
    return result;
};

export { formatViewCount };
