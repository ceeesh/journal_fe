import axios from 'axios';

const BASED_URL = 'http://127.0.0.1:8000/api/'

export const getData = async () => {
    return await axios.get(`${BASED_URL}`)
}