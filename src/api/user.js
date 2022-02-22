import instance from './config';

export const signup = (account) => {
    const url = `/signup`;
    return instance.post(url, account)
}
export const signin = (account) => {
    const url = `/signin`;
    return instance.post(url, account)
}
export const getAll = () => {
    const url = '/users';
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}