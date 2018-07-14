import axios from 'axios';
import apiConfig from './config';

export const get = (path, parameters = {}) => {
    console.log("GET Parameter")
    console.log(parameters)
    const pattern = /:orderno|:idx|:barcode/g;
    const realPath = apiConfig[path].replace(pattern, parameters);
    console.log(`/Lib/Api/index.js :: GET :: ${apiConfig.url}${realPath}`);
    console.log(parameters);
    return axios.get(apiConfig.url + realPath, { params: parameters })
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((err) => {
            return Promise.reject(err);
        });
};

export const post = (path, parameters = {}) => {
    const pattern = /:orderno/g;
    const realPath = apiConfig[path].replace(pattern, parameters.orderno);
    console.log(realPath);
    console.log(`/Lib/Api/index.js :: POST :: ${apiConfig.url}${realPath}`);
    console.log(parameters);
    return axios.post(apiConfig.url + realPath, parameters)
        .then((response) => {
            console.log(`/Lib/Api/index.js :: POST :: ${realPath} :: Success!`);
            return Promise.resolve(response);
        })
        .catch((err) => {
            console.log(`/Lib/Api/index.js :: POST :: ${realPath} :: Failed!`);
            console.log(err);
            return Promise.reject(err);
        });
};

export const del = (path, parameters = {}) => {
    const pattern = /:orderno|:idx/g;
    const realPath = apiConfig[path].replace(pattern, parameters);
    console.log(`/Lib/Api/index.js :: DELETE :: ${apiConfig.url}${realPath}`);
    console.log(parameters);
    return axios.delete(apiConfig.url + realPath)
        .then((response) => {
            console.log(`/Lib/Api/index.js :: DELETE :: ${realPath} :: Success!`);
            return Promise.resolve(response);
        })
        .catch((err) => {
            console.log(`/Lib/Api/index.js :: DELETE :: ${realPath} :: Failed!`);
            console.log(err);
            return Promise.reject(err);
        });
};
export const uploadByUri = (path, params = {}) => {
    console.log(`/Lib/Api/index.js :: UPLOAD :: ${apiConfig.url}${apiConfig[path]}`);
    console.log(params);
    const body = new FormData();
    body.append('file', {
        uri: params.uri,
        type: params.type,
        name: params.name,
    });
    return axios.post(apiConfig.url + apiConfig[path], body)
        .then((response) => {
            console.log(`/Lib/Api/index.js :: UPLOAD :: ${path} :: Success!`);
            return Promise.resolve(response);
        })
        .catch((err) => {
            console.log(`/Lib/Api/index.js :: UPLOAD :: ${path} :: Failed!`);
            console.log(err);
            return Promise.reject(err);
        });
};

// 참조문서1: axios => https://github.com/mzabriskie/axios
