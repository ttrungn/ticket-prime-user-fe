import api from '../configs/axios';

export const getCategories = () => api.get('/core/categories');
