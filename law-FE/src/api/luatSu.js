import axiosClient from "./axiosClient";

const luatSu = {
    getList: async (params) => {
        const url = `/api/luatSu/getList`;
        return axiosClient.post(url);
    },
    getInfo: async (params) => {
        const url = `/api/luatSu/get`;
        return axiosClient.post(url, params);
    },
};

export default luatSu;
