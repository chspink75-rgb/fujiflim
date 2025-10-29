document.addEventListener('DOMContentLoaded', function() {
    
    /* -------------------------------------------------------------------------- */
    /* 1. Swiper Gallery Initialization (메인 비주얼) */
    /* -------------------------------------------------------------------------- */
    const mainSwiper = new Swiper('.main-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade', 
        fadeEffect: {
            crossFade: true
        }
    });

    /* -------------------------------------------------------------------------- */
    /* 2. GNB (Global Navigation Bar) Hover Effect */
    /* -------------------------------------------------------------------------- */
    const header = document.getElementById('header');
    const subMenuBg = document.querySelector('.sub-menu-bg');
    const subMenuContainer = document.querySelector('.sub-menu-container');
    
    const subMenuHeight = 200; 

    header.addEventListener('mouseenter', function() {
        subMenuBg.style.height = subMenuHeight + 'px';
        subMenuContainer.style.opacity = '1';
        subMenuContainer.style.pointerEvents = 'auto';
    });

    header.addEventListener('mouseleave', function() {
        subMenuBg.style.height = '0';
        subMenuContainer.style.opacity = '0';
        subMenuContainer.style.pointerEvents = 'none';
    });
    
    /* -------------------------------------------------------------------------- */
    /* 3. ScrollReveal Animation (스크롤 애니메이션) - 전체 섹션 적용 */
    /* -------------------------------------------------------------------------- */
    const sr = ScrollReveal({
        distance: '50px', 
        duration: 800,   
        easing: 'ease-in-out',
        origin: 'bottom', // 기본 애니메이션 방향
        mobile: false,    
    });

    // Products of the Week Section (#products)
    sr.reveal('#products .section-title', { delay: 100, origin: 'top' });
    sr.reveal('#products .product-item', { interval: 150 });

    // GFX Section (#gfx)
    sr.reveal('#gfx .content-box .image-area', { origin: 'left', delay: 200 });
    sr.reveal('#gfx .content-box .text-area .category', { origin: 'top', delay: 300 });
    sr.reveal('#gfx .content-box .text-area .description', { delay: 400 });
    sr.reveal('#gfx .content-box .text-area .read-more', { delay: 500 });


    // X100VI Section (#x100)
    // right-text 레이아웃이지만, 텍스트가 먼저 올라오도록 조정
    sr.reveal('#x100 .content-box .text-area .category', { origin: 'top', delay: 200 });
    sr.reveal('#x100 .content-box .text-area .description', { delay: 300 });
    sr.reveal('#x100 .content-box .text-area .read-more', { delay: 400 });
    sr.reveal('#x100 .content-box .image-area', { origin: 'right', delay: 500 });


    // Lenses/Lifestyle Section (#lifestyle)
    sr.reveal('#lifestyle .content-box .image-area', { origin: 'right', delay: 200 });
    sr.reveal('#lifestyle .content-box .text-area .category', { origin: 'top', delay: 300 });
    sr.reveal('#lifestyle .content-box .text-area .description', { delay: 400 });
    sr.reveal('#lifestyle .content-box .text-area .read-more', { delay: 500 });


    // Daily Bag Section (#bag)
    sr.reveal('#bag .content-box .text-area .category', { origin: 'top', delay: 200 });
    sr.reveal('#bag .content-box .text-area .description', { delay: 300 });
    sr.reveal('#bag .content-box .text-area .read-more', { delay: 400 });
    sr.reveal('#bag .content-box .image-area', { origin: 'left', delay: 500 });


    // Story Section (#story)
    sr.reveal('#story .section-title', { delay: 100, origin: 'top' });
    sr.reveal('#story .story-content .image-area-small', { origin: 'left', delay: 300 });
    sr.reveal('#story .story-content .text-area', { origin: 'right', delay: 400 });

    // Footer Section (#footer)
    sr.reveal('#footer .footer-top', { delay: 200 });
    sr.reveal('#footer .footer-bottom', { delay: 300 });
});