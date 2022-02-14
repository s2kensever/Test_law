import axiosClient from "./axiosClient";

const news = {
    getList: async (params) => {
        const url = `/api/news/getList`;
        return axiosClient.get(url params);
    },
    
};

export default news;
