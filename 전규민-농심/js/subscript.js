document.addEventListener('DOMContentLoaded', function() {
    
    /* -------------------------------------------------------------------------- */
    /* 1. ScrollReveal Animation (스크롤 애니메이션) - 전체 섹션 적용 */
    /* -------------------------------------------------------------------------- */
    const sr = ScrollReveal({
        distance: '50px', 
        duration: 900,   
        easing: 'ease-in-out',
        origin: 'bottom', // 기본 애니메이션 방향
        mobile: false,    
    });

    // 1. Main Visual Section
    sr.reveal('#main-visual .main-image-area img', { origin: 'top', distance: '30px', duration: 1000 });
    sr.reveal('#main-visual .main-title', { delay: 400 });
    sr.reveal('#main-visual .sub-text', { delay: 500 });

    // 2 & 3. Landscape Banners 1 & 2
    sr.reveal('#landscape-banner-1 .image-full img', { delay: 200, scale: 0.98, duration: 1200 });
    sr.reveal('#landscape-banner-2 .image-full img', { delay: 200, scale: 0.98, duration: 1200 });

    // 4. Product Features Grid (8개 그리드)
    sr.reveal('#product-features-grid .feature-item', { interval: 100, delay: 100 });
    
    // 5. Product Detail Views (4개)
    sr.reveal('#product-detail-views .section-title', { origin: 'top', delay: 100 });
    sr.reveal('#product-detail-views .detail-view-item', { interval: 200, viewFactor: 0.4 }); 

    // 6. Outing Experience (출사 사진)
    sr.reveal('#outing-experience .outing-block-1 .outing-image-col', { origin: 'left', delay: 200 });
    sr.reveal('#outing-experience .outing-block-1 .outing-text-col', { origin: 'right', delay: 300 });

    sr.reveal('#outing-experience .outing-block-2 .outing-sub-images', { origin: 'left', delay: 400 });
    sr.reveal('#outing-experience .outing-block-2 .outing-large-image', { origin: 'right', delay: 500 });
    sr.reveal('#outing-experience .color-palette-grid img', { interval: 80, delay: 600 });
    
    // 7. Product Advantages Main (장점 배열)
    sr.reveal('#product-advantages-main .advantage-block:nth-child(1) .advantage-image-main', { delay: 200, scale: 0.95 });
    sr.reveal('#product-advantages-main .advantage-block:nth-child(1) .large-title', { delay: 400 });
    sr.reveal('#product-advantages-main .advantage-block:nth-child(1) .advantage-quote', { delay: 500 });

    sr.reveal('#product-advantages-main .advantage-block:nth-child(2) .advantage-image-main', { delay: 600, scale: 0.95 });
    sr.reveal('#product-advantages-main .advantage-block:nth-child(2) .large-title', { delay: 700 });
    sr.reveal('#product-advantages-main .advantage-block:nth-child(2) .advantage-quote', { delay: 800 });
    
    // 8. Footer (규격)
    sr.reveal('#footer .footer-links-grid', { origin: 'top', delay: 200 });
    sr.reveal('#footer .footer-copyright-info', { delay: 300 });
    // Product Specs Section
    sr.reveal('#product-specs .specs-main-title', { origin: 'top', delay: 200 });
    sr.reveal('#product-specs .specs-table tbody tr', { interval: 50, delay: 300 });

    // Footer 섹션의 delay를 조정하여 규격 섹션 다음에 나타나도록 할 수 있습니다. (선택 사항)
    // sr.reveal('#footer .footer-links-grid', { origin: 'top', delay: 400 });
    // sr.reveal('#footer .footer-copyright-info', { delay: 500 });
});