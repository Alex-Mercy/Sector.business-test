import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getData = async () => {
    return await axios.get(`${baseUrl}?_page=1`);
};
