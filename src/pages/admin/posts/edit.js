import axios from "axios";
import { edit, get } from "../../../api/product";
import { getAll } from "../../../api/category";
import Navadmin from "../../../components/navAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AdminEditposts = {
    async render(id) {
        const { data } = await get(id);
        const categorie = await getAll();
        console.log(data);
        return /*html*/`
        <div class="min-h-full">
        ${Navadmin.render()}
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Cập nhật
                </h1>
            </div>
        </header>
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="mt-5 md:mt-0 md:col-span-3 ">
                            <form action="" id="form-edit">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-2">
                                                <label for="company-website"
                                                    class="block text-sm font-medium text-gray-700">
                                                    Tiêu Đề
                                                </label>
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <input type="text" value="${data.name}" name="company-website"
                                                        id="title-post"
                                                        class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="Title">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-2">
                                                <label for="company-website"
                                                    class="block text-sm font-medium text-gray-700">
                                                    Ảnh
                                                </label>
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <img src="${data.img}" alt="" width="100px" id ="img-preview">
                                                    <input type="file" name="company-website" id="img-post"
                                                        class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="Title">
    
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                               Giá
                                            </label>
                                            <div class="mt-1">
                                                <input type="number" value="${data.price}" name="company-website" id="price-post"
                                                    class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                    placeholder="Title">
                                            </div>
                                        </div>
                                        <div class="col-span-3 sm:col-span-2">
                                            <select name="" id="cateId" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md pl-[10px]">
                                            ${categorie.data.map((post) => /* html */ `
                                            <option value="${post.id}" ${post.id === data.categoryProductId ? "selected" : ""}>${post.title}</option>
                                            `).join("")}
                                        </select>
                                        </div>
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                                Desc
                                            </label>
                                            <div class="mt-1">
                                                <input type="text" value="${data.desc}" name="company-website" id="desc-post"
                                                    class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                    placeholder="Title">
                                            </div>
                                        </div>
    
                                    </div>
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button class="bg-blue-500 p-4 text-white">Cập nhật bài viết</button>
    
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </main>
    </div>
    <div>
        `
    },
    afterRender(id) {
        const formEditPost = document.querySelector('#form-edit');
        const imgPreview = document.querySelector('#img-preview');
        const imgPost = document.querySelector('#img-post');
        let imgLink = "";


        const CLOUDINARY_PRESET = "qoqbcmci";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dectee66b/image/upload";

        // preview
        imgPost.addEventListener('change', function (e) {
            imgPreview.src = URL.createObjectURL(e.target.files[0])
        })


        formEditPost.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector('#img-post').files[0];
            if (file) {
                // Gắn vào đối tượng formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET);


                // call api cloudinary, để upload ảnh lên
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                });
                imgLink = data.url
            }

            // call API thêm bài viết
            edit({
                id,
                categorieId: Number(document.querySelector("#cateId").value),
                name: document.querySelector('#title-post').value, // iphone x plus 10
                img: imgLink || imgPreview.src,
                price: document.querySelector('#price-post').value,
                desc: document.querySelector('#desc-post').value
            })
            document.location.href = "/admin/sanpham";
        });
    },
};
export default AdminEditposts;