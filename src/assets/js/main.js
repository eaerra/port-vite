import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    port();
});

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// GSAP와 ScrollTrigger를 활용한 애니메이션
gsap.registerPlugin(ScrollTrigger);

gsap.to("#portfolioTitle", {
    scrollTrigger: {
      trigger: "#intro",  // 스크롤을 감지할 대상
      start: "top top",    // 시작 위치: #intro의 top이 화면의 top에 도달할 때
      end: "bottom bottom", // 종료 위치: #intro의 bottom이 화면의 bottom에 도달할 때
      scrub: true,         // 스크롤에 맞춰 애니메이션을 부드럽게 실행
      pin: true,           // 텍스트를 고정시켜 스크롤 동안 항상 보이게 유지
    },
    fontSize: "20rem",   // 커지는 크기
    opacity: 0,          // 사라짐
    scale: 3,            // 스케일을 3배 키우기
});

// 인트로 영역
gsap.to(".deco_box1", {
    rotation: 360,
    duration: 4,
    ease: Linear.easeNone,
    repeat: -1,
});
gsap.to(".deco_box2", {
    rotation: 360,
    duration: 6,
    ease: Linear.easeNone,
    repeat: -1,
});
gsap.to(".deco_box4", {
    rotation: 360,
    duration: 7,
    ease: Linear.easeNone,
    repeat: -1,
});
gsap.to(".deco_box6", {
    rotation: 360,
    duration: 7,
    ease: Linear.easeNone,
    repeat: -1,
});
gsap.to(".deco_box9", {
    rotation: 360,
    duration: 4,
    ease: Linear.easeNone,
    repeat: -1,
});

// 사이트 영역
// item 터지는 효과
const siteItems = document.querySelectorAll('.site_item'); // 모든 .site_item 요소를 선택

siteItems.forEach(function(siteItem) {
    siteItem.addEventListener('click', function() {
        // 클릭 시 'clicker' 추가
        siteItem.classList.add('clicker');

        // p태그 사라지기
        const pTag = siteItem.querySelector('p');
         if(pTag){
            pTag.style.display = 'none';
         }
    });
});

// 위아래로 계속 움직이는 효과
gsap.to(".site_deco.b4", {
    y: "10%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 0.8,  // 1초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".site_deco.b7", {
    y: "10%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 1,  // 1초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".site_deco.b8", {
    y: "10%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 1,  // 1초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".site_deco.b9", {
    y: "10%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 1.7,  // 2초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".site_deco.b10", {
    y: "10%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 3,  // 3초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".site_deco.b11", {
    y: "10%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 1,  // 1초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".img_left", {
    y: "1%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 1.5,  // 1.5초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});
gsap.to(".img_right", {
    y: "1%",  // 10% 아래로 이동
    repeat: -1,  // 무한 반복
    yoyo: true,  // 애니메이션이 끝날 때 원래 위치로 돌아옴
    duration: 3,  // 3초 동안 애니메이션
    ease: "power1.inOut"  // 애니메이션 속도 설정 (시작과 끝이 부드럽게)
});