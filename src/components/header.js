import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = {
  render() {
    return /* html */`
        <div class="relative bg-white">
         <div class="max-w-7xl mx-auto px-4 sm:px-6">
           <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
             <div class="flex justify-start lg:w-0 lg:flex-1">
               <a href="#">
                 <span class="sr-only">Workflow</span>
                 <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
               </a>
             </div>
     
             <nav class="hidden md:flex space-x-10">
     
               <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900">Trang chủ</a>
               <a href="/products" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sản phẩm </a>
               <a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> Liên hệ </a>
               <a href="/cart" class="text-base font-medium text-gray-500 hover:text-gray-900"> Giỏ hàng </a>
               <a href="/admin" class="text-base font-medium text-gray-500 hover:text-gray-900"> Admin </a>
     
     
             </nav>
             <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
               <a href="/signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Đăng nhập </a>
               <a href="/signup"
                 class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Đăng kí </a>
             </div> 
             
           
             
           </div>
           ${localStorage.getItem('user') ? /*html*/ `
           <ul class="flex">
             <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
             <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
         </ul>
         `: ""}
         </div>
       </div>
        `;
  },
  afterRender() {
    // Lấy thông tin từ localStorage
    // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
    const email = document.querySelector('#email');
    const logout = document.querySelector('#logout');
    if (email) {
      email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
    }
    if (logout) {
      logout.addEventListener('click', function () {
        localStorage.removeItem('user');
        reRender(Header, "#header");
        toastr.success("Logout thành công")
      })
    }
  }
};
export default Header;