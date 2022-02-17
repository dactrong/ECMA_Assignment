import Footer from "../components/footer";
import Header from "../components/header";

const NotFoundPage = {
    render() {
        return /*html*/ `
        ${Header.render()}
        Not Found Page
        ${Footer.render()}
        `;
    },
};
export default NotFoundPage;