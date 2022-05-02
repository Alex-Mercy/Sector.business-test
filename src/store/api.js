import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getData = async (sortBy, ascOrder, currentPage) => {
    return await axios.get(`${baseUrl}?_page=${currentPage}&_sort=${sortBy}&_order=${ascOrder ? `asc` : `desc`}`);
};
