import Footer from "../components/footer";
import Header from "../components/header";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const CartPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return /*html*/`

        ${Header.render()}
        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${cart.map(item =>/*html*/ `
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">${item.name}</div>
                  
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-20 w-36">
                    <img class="h-20 w-36" src="${item.img}" alt="">
                    
                  </div>
                 
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">${item.price}VNĐ</div>
              
              </td>
              <td class="px-6 py-4 whitespace-nowrap"> 
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "> ${item.quantity}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button data-id="${item.id}" class="btn btn-increase">+</button>
             <button data-id="${item.id}" class="btn btn-decrease">-</button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900"><button data-id="${item.id}" class="btn btn-remove">Xóa</button></a>
              </td>
            </tr>
            `).join('')}
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        ${Footer.render()}
            
        `
    },
    afterRender(){
        const btns = document.querySelectorAll( '.btn');
        btns.forEach(button => {
            button.addEventListener('click', function(){
                        const id = button.dataset.id;
                        if(button.classList.contains('btn-increase')){
                            increaseQuantity(id);
                        } else if (button.classList.contains('btn-decrease')){
                            decreaseQuantity(id, () => {
                                reRender(CartPage, "#app");
                            });
                        } else { 
                            removeItemInCart(id,  () => {
                                reRender(CartPage, "#app");
                            })
                        }
            })
        })
    }
}
export default CartPage;