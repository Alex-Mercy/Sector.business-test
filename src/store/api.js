import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getData = async (sortBy, ascOrder, currentPage, searchValue) => {
    return await axios.get(`${baseUrl}?${searchValue !== ""
        ? `q=${searchValue}`
        : ''}&_page=${currentPage}&_sort=${sortBy}&_order=${ascOrder
            ? `asc`
            : `desc`}`);
};

