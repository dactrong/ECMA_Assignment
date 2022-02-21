import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const Banner  ={
    render () {
        return /*html*/`

        <!-- Slider main container -->
<div class="swiper">
<!-- Additional required wrapper -->
<div class="swiper-wrapper">
  <!-- Slides -->
  <div class="swiper-slide"><img src="https://dojeannam.com/wp-content/uploads/2017/09/BANNER-KHAI-TRUONG-DOJEANNAM.jpg" alt=""></div>
  <div class="swiper-slide"><img src="https://www.sevenzone.com/data/editor/2104/ea6a36c6ba695fbe0cf5823eb2560a16_1617311591_2952.png" alt=""></div>
  <div class="swiper-slide"><img src="https://dojeannam.com/wp-content/uploads/2017/09/BANNER-KHAI-TRUONG-DOJEANNAM.jpg" alt=""></div>

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
        
        
        `
    },
    afterRender(){
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