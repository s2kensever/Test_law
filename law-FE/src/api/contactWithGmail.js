import axiosClient from "./axiosClient";

const contactWithGmail = {
    contactWithGmail: async (params) => {
        const url = `/api/contactWithGmail`;
        return axiosClient.post(url, params);
    }
};

export default contactWithGmail;
