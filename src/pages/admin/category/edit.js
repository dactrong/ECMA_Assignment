import { edit, get } from "../../../api/category";
import Navadmin from "../../../components/navAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AdminEditCategory = {
    async render(id) {
        const { data } = await get(id);
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
                                                    <input type="text" value="${data.title}" name="company-website"
                                                        id="title-post"
                                                        class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="Title">
                                                </div>
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

        formEditPost.addEventListener('submit', async function (e) {
            e.preventDefault();
            try {
                // call API thêm bài viết
                edit({
                    id: id,
                    title: document.querySelector('#title-post').value,

                });
                if ({ data }) {
                    toastr.success("Đã sửa danh mục");
                    setTimeout(() => {
                        document.location.href = "/admin/danhmuc";
                    }, 1000);
                }
            } catch (error) {
                toastr.error(error.response.data);
                $("#form-edit").reset();
            }
        });
    },
};
export default AdminEditCategory;