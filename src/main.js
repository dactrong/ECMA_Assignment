import Navigo from "navigo";
import "../style.css";
import newAcount from "./components/admin/account";
import newList from "./components/admin/new";
import newEdit from "./components/admin/new/edit";
import newOrder from "./components/admin/order";
import newProduct from "./components/admin/product";
import newAddProduct from "./components/admin/product/add";
import Navadmin from "./components/navAdmin";
import About from "./pages/about";
import Contact from "./pages/contact";
import Homepage from "./pages/home";
import Lognin from "./pages/login";
import newDetail from "./pages/newDetail";
import NotFoundPage from "./pages/notFound";
import Order from "./pages/order";
import Signin from "./pages/signup";
import AdminAddNewsPage from "./components/admin/new/add";


const router = new Navigo("/", { linksSelector: "a" });


const print = async (content,id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if(content.afterRender) content.afterRender();
}



router.on({
  "/": () => {
    print(Homepage);

  },
  "/sanpham": () => {
    print(About);

  },
  "/lienhe": () => {
    print(Contact);

  },
  "/dangki": () => {
    print(Lognin);

  },
  "/dangnhap": () => {
    print(Signin);

  },
  "/giohang": () => {
    print(Order);

  },
  "/admin": () => {
    print(Navadmin);

  },
  "/admin/danhmuc": () => {
    print(newList);

  },
  "/admin/sanpham": () => {
    print(newProduct);

  },
  "/admin/taikhoan": () => {
    print(newAcount);

  },
  "/admin/order": () => {
    print(newOrder);

  },
  
  "/admin/new/newsadd": () => {
    print(AdminAddNewsPage);

  },
  "/admin/new/addproduct": () => {
    print(newAddProduct);

  },
  "/new/:id": ({data: {id}}) =>{
    print(newDetail,id);
  },
  "/admin/new/addproduct": () => {
    print(newAddProduct);

  },
  "/admin/new/:id/edit": ({data}) => {
    print(newEdit, data.id);
},
  
});
router.notFound(() => print(NotFoundPage));
router.resolve();
