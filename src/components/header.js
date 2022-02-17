const Header = {
     render(){
         return /*html*/`
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
               <a href="/sanpham" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sản phẩm </a>
               <a href="/lienhe" class="text-base font-medium text-gray-500 hover:text-gray-900"> Liên hệ </a>
               <a href="/giohang" class="text-base font-medium text-gray-500 hover:text-gray-900"> Giỏ hàng </a>
               <a href="/admin" class="text-base font-medium text-gray-500 hover:text-gray-900"> Admin </a>
     
     
             </nav>
             <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
               <a href="/dangnhap" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Đăng nhập </a>
               <a href="/dangki"
                 class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Đăng kí </a>
             </div>
           </div>
         </div>
       </div>
         ` 
     }
};
export default Header;