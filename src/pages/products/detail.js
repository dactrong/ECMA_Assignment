import { get } from '../../api/product';
import { addToCart } from '../../utils/cart';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Footer from '../../components/footer';
import Header from '../../components/header';


const ProductDetailPage = {
async render(id) {
const { data: product } = await get(id)
return /* html */`
${Header.render()}
<div class="">
   
    <!-- Product info -->
    <div
        class="max-w-2xl mx-auto  pb-16  sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class=" pl-52 text-1xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">${product.name}</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl text-gray-900">${product.price}$</p>

            <!-- Reviews -->
            <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                    <div class="flex items-center">
                        <!--
                      Heroicon name: solid/star
      
                      Active: "text-gray-900", Default: "text-gray-200"
                    -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <!-- Heroicon name: solid/star -->
                        <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <p class="sr-only">4 out of 5 stars</p>
                    <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                </div>
            </div>


            <!-- Colors -->
            <div>
                <h3 class="text-sm text-gray-900 font-medium">Color</h3>

                <fieldset class="mt-4">
                    <legend class="sr-only">Choose a color</legend>
                    <div class="flex items-center space-x-3">
                        <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                        <label
                            class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="White" class="sr-only"
                                aria-labelledby="color-choice-0-label">
                            <p id="color-choice-0-label" class="sr-only">White</p>
                            <span aria-hidden="true"
                                class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                        </label>

                        <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                        <label
                            class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="Gray" class="sr-only"
                                aria-labelledby="color-choice-1-label">
                            <p id="color-choice-1-label" class="sr-only">Gray</p>
                            <span aria-hidden="true"
                                class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                        </label>

                        <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                        <label
                            class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                            <input type="radio" name="color-choice" value="Black" class="sr-only"
                                aria-labelledby="color-choice-2-label">
                            <p id="color-choice-2-label" class="sr-only">Black</p>
                            <span aria-hidden="true"
                                class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                        </label>
                    </div>
                </fieldset>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
                <div class="flex items-center justify-between">
                    <h3 class="text-sm text-gray-900 font-medium">Size</h3>
                    <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                </div>

                <fieldset class="mt-4">
                    <legend class="sr-only">Choose a size</legend>
                    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        <!-- Active: "ring-2 ring-indigo-500" -->
                        <input type="number" id="inputValue" class="border border-black" />
                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>
                        <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>
                    </div>
                </fieldset>
            </div>
            <button type="submit" data-id="${product.id}" id="btnAddToCart"
                class="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Mua
                hàng</button>

        </div>

        <div class="pl-52 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <!-- Description and details -->
            <div >
                <h3 class="sr-only">Description</h3>
                <div class="">
                    <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                        <img src="${product.img}" alt="Two each of gray, white, and black shirts laying flat."
                            class="w-full w-2/3 h-full object-center object-cover">
                    </div>

                </div>

            </div>

            <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Details</h2>

                <div class="mt-4 space-y-6">
                    <p class="text-sm text-gray-600">${product.desc}.</p>
                </div>
            </div>
        </div>
    </div>
</div>
${Footer.render()}
</div>
`;
},
afterRender() {
    Header.afterRender();
        const btnAddToCart = document.querySelector('#btnAddToCart');
            const id = btnAddToCart.dataset.id;
                const inputValue = document.querySelector('#inputValue');

                btnAddToCart.addEventListener('click', async function () {
                // console.log(inputValue.value)
                const { data } = await get(id);
                console.log(data);
                addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 }, function () {
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            })
        })
   }
};
export default ProductDetailPage;