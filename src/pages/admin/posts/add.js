import axios from "axios";
import { add } from "../../../api/product";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Navadmin from "../../../components/navAdmin";

const AdminAddPosts = {
  async render() {
    return /*html*/`
        <div class="min-h-full">
        ${Navadmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Thêm mới bài viết
                </h2>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
                <a href="/admin/news" class="sm:ml-3">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Quay lại
                </button>
                </a>
            </div>
            </div>
    
        </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <form action="" id="form-add">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                    Tiêu Đề
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="company-website"  id="title-post"  class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Title">
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium text-gray-700">
                  Ảnh
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                <input type="file" name="company-website"  id="img-post"  class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Title">
              </div>
              </div>
            </div>
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                  Desc
                </label>
                <div class="mt-1">
                  <textarea  id="desc-post" name="about" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="" id="desc-post" ></textarea>
                </div>
              </div>
              <div class="col-span-3 sm:col-span-2">
                  <label for="company-website" class="block text-sm font-medium text-gray-700">
                    Giá
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" name="company-website"  id="price-post"  class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Giá">
                  </div>
                </div>
          
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Lưu
              </button>
            </div>
          </div>
            </form>
            <!-- /End replace -->
        </div>
        </main>
    </div>
        `
  },
  afterRender() {
    const formAddPost = document.querySelector('#form-add');
    const CLOUDINARY_PRESET = "qoqbcmci";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dectee66b/image/upload";


    formAddPost.addEventListener('submit', async function (e) {
      e.preventDefault();
      try {
        // Lấy giá trị của input file
        const file = document.querySelector('#img-post').files[0];
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
        // call API thêm bài viết
        add({
          name: document.querySelector('#title-post').value,
          img: data.url,
          desc: document.querySelector('#desc-post').value,
          price: document.querySelector('#price-post').value
        });
        if ({ data }) {
          toastr.success("Thêm mới sản phẩm thành công");
          setTimeout(() => {
            document.location.href = "/admin/sanpham";
          }, 1000);
        }
      } catch (error) {
        toastr.error(error.response.data);
        $("#form-add").reset();
      }
    });
  },
};
export default AdminAddPosts;