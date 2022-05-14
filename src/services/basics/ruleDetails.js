import http from '../http';

export const dictPage = (params) => {
    return http.post('/api/base/dict/getPage', params);
};
export const dictUpdate = (params) => {
    return http.put('/api/base/dict', params);
};
export const dictDel = (params) => {
    return http.delete('/api/base/dict', params);
};
export const dictAdd = (params) => {
    return http.post('/api/base/dict', params);
};
export const dictParent = (params) => {
    return http.get('/api/base/dict/getParent', params);
};