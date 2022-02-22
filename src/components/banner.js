import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Banner = {
  render() {
    return /*html*/`
    
    <!-- Slider main container -->
    <div class="swiper max-h-64  ">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide"><img
                    src="https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg"
                    alt=""></div>
            <div class="swiper-slide"><img
                    src="https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg"
                    alt=""></div>
            <div class="swiper-slide"><img
                    src="https://tmluxury.vn/wp-content/uploads/banner-do-shop-thoi-trang-nam-tphcm-tmluxury.jpg"
                    alt=""></div>

            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
</div>
</div>
        
        `
  },
  afterRender() {
    var swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
};
export default Banner;