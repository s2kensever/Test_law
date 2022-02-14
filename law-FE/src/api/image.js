import axiosClient from "./axiosClient";

const image = {
    getImage: async (params) => {
        const url = `/api/image`;
        return axiosClient.post(url, params);
    },
};

export default image;
