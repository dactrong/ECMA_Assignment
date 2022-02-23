
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newsList";
import Post from "../components/post";

const HomePage = {
    async render() {
        return /* html */`
            <div class=" mx-auto">
                <div id="header">
                    ${ await Header.render()}
                </div>
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                    ${await NewList.render()}
                </div>
                <div class="banner">
                   ${await Post.render()}
                </div>
                
                ${Footer.render()}
            </div>
        `;
    },
    afterRender(){
        Header.afterRender();
        Banner.afterRender();
    }
};
export default HomePage;