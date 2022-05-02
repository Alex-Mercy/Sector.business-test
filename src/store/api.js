import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getData = async (sortBy, ascOrder) => {
    console.log(ascOrder);
    return await axios.get(`${baseUrl}?_page=1&_sort=${sortBy}&_order=${ascOrder ? `asc` : `desc`}`);
};
