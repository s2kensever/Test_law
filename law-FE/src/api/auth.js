import axiosClient from "./axiosClient";

const auth = {
    login: async (params) => {
        const url = `/api/auth/login`;
        return axiosClient.post(url, { ...params, role: "U" });
    },
    register: async (params) => {
        const url = `/api/auth/register`;
        return axiosClient.post(url, params);
    },
    auth: async (params) => {
        const url = `/api/auth/`;
        return axiosClient.post(url, { role: "U" });
    },
};

export default auth;
