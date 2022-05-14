import http from './http';

export const login = (params) => {
  return http.post('/api/admin/api/login', params);
};

export const logout = (params) => {
  return http.delete('/api/admin/home/logout', params);
};

export const getAuthorityMenu = (params) => {
  return http.get('/api/admin/user/principal', params);
};

export const userLogout = () => { };
