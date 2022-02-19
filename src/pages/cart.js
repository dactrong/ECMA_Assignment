import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const CartPage = {
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return `
            <table>
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button data-id="${item.id}" class="btn btn-increase">+</button>
                                <button data-id="${item.id}" class="btn btn-decrease">-</button>
                            </td>
                            <td>
                                <button data-id="${item.id}" class="btn btn-remove">X</button>
                            </td>
                        </tr>
                    `).join('')}
                    
                </tbody>
            </table>
        `
    },
    afterRender(){
        const btns = document.querySelectorAll('.btn');
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