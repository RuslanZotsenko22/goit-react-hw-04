import axios from "axios";
const API_KEY = 'QIyTrlG0kp_alS8E7pd7LsvdYGFKoL5Q9cfN-HWNkCs'


export const fetchImagesGallery = async (query, page) => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&page=${page}`);
    return data;
}