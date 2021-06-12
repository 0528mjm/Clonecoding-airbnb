// new Swiper(CSS 선택자, 옵션)
new Swiper(".mySwiper", {
  slidesPerView: 3, // 한번에 보이는 슬라이드 개수는 3개
  spaceBetween: 20, // 슬라이드 사이 간격은 20
  loop: true, // loop는 true
  centeredSlides: true, // 활성 슬라이드 위치를 center로 설정
  autoplay: {
    delay: 1600, // 자동 슬라이드 시간차 1600
    pauseOnMouseEnter: true, // 마우스를 얹으면 일시정지하기
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});


// 로그인창 선택
const clickIt = document.getElementById('hamburger')
const va = document.getElementById('logIn')

// 클릭이벤트 발생시 로그인 창이 보이면 사라지게, 안보이면 나타나게
clickIt.addEventListener("click", function(){
    if(va.style.display=="none")

    {
        va.style.display="block"
    }
    else{
        va.style.display="none"
    }
})

// 검색창 위치 선택
const locationClick = document.getElementById('location')
const va1 = document.getElementById('locationClick1')

// 클릭이벤트 발생시 위치 창이 보이면 사라지게, 안보이면 나타나게
locationClick.addEventListener("click", function(){
    if(va1.style.display=="none")
    {
        va1.style.display="block"
    }
    else{
        va1.style.display="none"
    }
})

// 클릭이벤트 발생시 체크인 달력 창이 보이면 사라지게, 안보이면 나타나게
const checkinClick = document.getElementById('checkIn')
const va2 = document.getElementById('calendarAll')

checkinClick.addEventListener("click", function(){
    if(va2.style.display=="none")
    {
        va2.style.display="block"
    }
    else{
        va2.style.display="none"
    }
})

// 클릭이벤트 발생시 체크아웃 달력 창이 보이면 사라지게, 안보이면 나타나게
const checkoutClick = document.getElementById('checkOut')
const va3 = document.getElementById('calendarAll')

checkoutClick.addEventListener("click", function(){
    if(va3.style.display=="none")
    {
        va3.style.display="block"
    }
    else{
        va3.style.display="none"
    }
})
