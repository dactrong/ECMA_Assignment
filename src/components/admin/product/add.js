import Navadmin from "../../navAdmin";

const newAddProduct ={
    render(){
        return /*html*/`
        <div class="min-h-full">
        ${Navadmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
            Thêm Mới
            </h1>
        </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-3 ">
              <form action="" id="form-add" >
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                      <div class="col-span-3 sm:col-span-2">
                        <label for="company-website" class="block text-sm font-medium text-gray-700">
                          Tiêu Đề
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input type="text" name="company-website"  id="title-add"  class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Title">
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700">
                        Ảnh
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="company-website"  id="img-add"  class="py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Title">
                      </div>
                    </div>
                  </div>
                    <div>
                      <label for="about" class="block text-sm font-medium text-gray-700">
                        Desc
                      </label>
                      <div class="mt-1">
                        <textarea  id="desc-add" name="about" rows="3" class="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="" id="desc-post" ></textarea>
                      </div>
                    </div>
        
                    
        
                
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Lưu
                    </button>
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
    }
}
export default newAddProduct;