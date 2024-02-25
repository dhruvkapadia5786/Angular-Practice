import { response } from "express";

export const constants = {
    CURRENT_TOKEN: `accessToken`,
}

const apiurl = 'http://localhost:3001';

export const apiEndpoint = {
    AuthEndpoint: {
        register: `${apiurl}/users/register`, 
        login: `${apiurl}/users/login`,
        logout: `${apiurl}/users/logout`,
        userlist: `${apiurl}/users`
    },
    FileUpload: {
        single: `${apiurl}/files/upload`,
        multiple: `${apiurl}/files/upload-multiple`
    }
}