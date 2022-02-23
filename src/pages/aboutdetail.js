import { get } from "../api/posts";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPageDetail = {
  async  render(id) {
    const  response = await get(id)
        return /* html */`
        ${ await Header.render()}
        <h3 class="text-2xl font-extrabold tracking-tight text-gray-900 ">Tin tức</h3>
        <div class="max-w-5xl mx-auto">
        <div class="bg-white">
        <div class="pt-6">
         ${response.data.map((product) => /*html*/ `
       
          <!-- Product info -->
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">${product.title}</h1>
            </div>
      
            <!-- Options -->
            
      
            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              
      
              <div class="mt-10">
               
      
                <div class="mt-4">
                <div class="rounded overflow-hidden mb-8">
                <img
                   src="${product.img}"
                   alt="image"
                   class="w-full"
                   />
             </div>
                </div>
              </div>
      
              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Details</h2>
      
                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">${product.desc}</p>
                </div>
              </div>
            </div>
          </div>
          `).join("")}
        </div>
     ${Footer.render()}
        </div>`;
    },
};
export default AboutPageDetail;