import instance from './config';

export const signup = (account) => {
    const url = `/signup`;
    return instance.post(url, account)
}
export const signin = (account) => {
    const url = `/signin`;
    return instance.post(url, account)
}