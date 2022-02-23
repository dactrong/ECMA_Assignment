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
import NotFoundPage from "./pages/notFound";
import AdminEditposts from "./pages/admin/posts/edit";
import Dashboard from "./pages/admin/dashboard";
import NewsAddCategory from "./pages/admin/category/add";
import AdminCategory from "./pages/admin/category";
import AdminEditCategory from "./pages/admin/category/edit";
import ListUser from "./pages/admin/user";
import ProductList from "./pages/products/productList";
import AdminTintuc from "./pages/admin/tintuc";
import AdminPostsAdd from "./pages/admin/tintuc/add";
import AdminPostsEdit from "./pages/admin/tintuc/edit";


const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) =>{ 
        if(localStorage.getItem('user')){
            console.log('ahihi');
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
    "/admin/dashboard": () =>print(Dashboard),
    "/admin/danhmuc": () =>print(AdminCategory),
    "/admin/category/add": () =>print(NewsAddCategory),
    "/admin/sanpham": () =>print(AdminPosts),
    "/admin/post": () =>print(AdminTintuc),
    "/admin/user": () =>print(ListUser),
    "/admin/posts/add": () =>print(AdminAddPosts),
    "/admin/tintuc/add": () =>print(AdminPostsAdd),
    "/admin/posts/:id/edit": ({data}) =>print(AdminEditposts, data.id),
    "/admin/tintuc/:id/edit": ({data}) =>print(AdminPostsEdit, data.id),
    "/admin/category/:id/edit": ({data}) =>print(AdminEditCategory, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
    "/categorie/:id": ({ data }) => {
        const { id } = data;
        print(ProductList, id);
    },
});
router.resolve();
router.notFound(() => print(NotFoundPage));
