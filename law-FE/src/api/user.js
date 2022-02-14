import axiosClient from "./axiosClient";

const user = {
    getInfo: async (params) => {
        const url = `api/user/getInfo`;
        return axiosClient.get(url);
    },

    update: async (params) => {
        const url = `/api/user`;
        return axiosClient.put(url, params);
    },
    changePassword: async (params) => {
        const url = `/api/user/changPassword`;
        return axiosClient.put(url, params);
    },
};

export default user;
