import instance from './config';

export const getAll = () => {
    const url = '/categorie';
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categorie/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/categorie/${id}`;
    return instance.delete(url);
}
export const add = (product) => {
    const url = `/categorie`;
    return instance.post(url, product);
}
export const edit = (post) => {
    const url = `/categorie/${post.id}`;
    return instance.put(url, post);
}