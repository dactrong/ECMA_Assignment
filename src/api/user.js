import instance from './instance';

export const signup = (users) => {
    const url = "/signup";
    instance.post(url, users);
}
export const signin = (users) => {
    const url = "/signin";
    instance.post(url, users);
}