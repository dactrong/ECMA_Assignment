import Navigo from "navigo";
import "../style.css";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import ProductDetailPage from "./pages/products/detail";
import CartPage from "./pages/cart";
import AdminPosts from "./pages/admin/posts";
import AdminAddPosts from "./pages/admin/posts/add";
import Navadmin from "./components/navAdmin";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) await content.afterRender(id);
};
router.on("/dactrong/*", () => {}, {
    before: (done) =>{ 
        if(localStorage.getItem('user')){
          
            const userId = JSON.parse(localStorage.getItem('user')).id;
            if(userId === 1){
                done();
            } else {
                document.location.href="/"
            }
        }
    }
})
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/admin": () => print(Navadmin),
    "/products": () => print(ProductPage),
    "/products/:id": ({data}) => print(ProductDetailPage, data.id),
    "/admin/posts": () =>print(AdminPosts),
    "/admin/posts/add": () =>print(AdminAddPosts),
    "/admin/posts/:id/edit": ({data}) =>print(AdminEditposts, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage)
});
router.resolve();
