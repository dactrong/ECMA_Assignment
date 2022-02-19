import { get } from '../../api/product';
import { addToCart } from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";


const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id)
        return /* html */`
        <div class="border p-3">
            <a href="">
                <img src="${product.img}" alt="" />
            </a>
            <h3 class="my-3">${product.name}</h3>
            <p>${product.desc}</p>
            <p>${product.price}</p>
            <input type="number" id="inputValue" class="border border-black"/>
            <button data-id="${product.id}" id="btnAddToCart">Add to cart</button>
        </div>
        `;
    },
    afterRender(){
        const btnAddToCart = document.querySelector('#btnAddToCart');
        const id = btnAddToCart.dataset.id;
        const inputValue = document.querySelector('#inputValue');

        btnAddToCart.addEventListener('click', async function(){
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: inputValue.value ? inputValue.value : 1}, function(){
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            })
        })
    }
};
export default ProductDetailPage;