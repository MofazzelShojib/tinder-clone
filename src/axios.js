import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-clone-bd.herokuapp.com",
});

export default instance;