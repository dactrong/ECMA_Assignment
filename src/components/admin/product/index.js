// import data from "../../../data";
import { getAll, remove } from "../../../api/categorie";
import NavAdmin from "../../navAdmin";

const newProduct = {
  async render() {
    const { data } = await getAll()
    return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="grid grid-cols-2 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                News
                </h1>
                <div class="ml-80">
                    <span class="sm:ml-3">
                      <a href="/admin/new/addproduct">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <!-- Heroicon name: solid/check -->
                              Thêm Mới
                          </button>
                        </a>  
                        
                    </span>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                          <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                            
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              STT
                            </th>
                            
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tên
                            </th>
                           
                           
                            
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          
                          ${data.map((post, index) => /* html */`
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/new/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                              <button data-id="${post.id}" class="btn btn-remove">Remove</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${index + 1}
                            </td>
                        
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900 py-30">
                                  <p>${post.title}</p>
                              </div>
                           
                            
                          </tr>
                          `).join("")}
                          
                          
              
                          <!-- More people... -->
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
            </main>
        </div>

        
        `;
  },
  afterRender() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      console.log(button);
      button.addEventListener('click', () => {
        const id = button.dataset.id;
        const confirm = window.confirm("Bạn có chắc chắn xóa không !");
        if (confirm) {
          remove(id).then(() => alert("Da xoa thanh cong"))
        }

      })
    })
  }
};
export default newProduct;