import axios from 'axios';
import accessKey from './unsplashAccessKey';

const Unsplash = axios.create({
    baseURL: 'https:/api.unsplash.com',
    headers: { Authorization: `Client-ID ${accessKey}` }
});

export default Unsplash;