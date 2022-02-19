import instance from "./instance";

export const getAll = () => {
    const url = "/categorie";
    return instance.get(url)
}
export const get = (id) => {
    const url = `/categorie/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/categorie`
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/categorie/${id}`;
    return instance.delete(url);
}
export const update = (post) => {
    const url = `/categorie/${post.id}`;
    return instance.put(url, post);
}