import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://cynop.herokuapp.com/home/`,
});

export const homeAPI = {

    getHeader() {
        return instance.get(`header`)
            .then(response => {
                return response.data;
            });
    },

    updateHeader(data) {
        return instance.put(`header/${data._id}`, data);

    },

    getNews(){
        return instance.get('news')
            .then(response => {
                return response.data;
            });
    },

    addNews(data) {
        return instance.post(`news`, data);
    },

    getOneNews(id) {
        return instance.get(`news/${id}`)
            .then(response => {
            return response.data;
        });
    },
};
