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

