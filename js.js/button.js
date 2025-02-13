// window.onload = function() {
//     const popup = document.getElementById("popup"); 
//     const submitBtn = document.getElementById("submitBtn"); 
//     const closeBtn = document.getElementById("closePopup");

//     if (submitBtn && popup && closeBtn) { 
//         submitBtn.addEventListener("click", function(event) {
//             popup.style.display = "block"; 
//             setTimeout(() => {
//                 popup.style.opacity = "1"; 
//             }, 10); // 약간의 지연을 줘서 애니메이션이 자연스럽게 실행됨
//         });

//         closeBtn.addEventListener("click", function() {
//             popup.style.opacity = "0"; 
//             setTimeout(() => {
//                 popup.style.display = "none";
//             }, 300); // opacity 애니메이션 지속 시간(0.3초) 후 display를 none으로 변경
//         });
//     } else {
//         console.error("필요한 요소들이 하나 이상 없습니다.");
//     }
// };


//버튼+세로휠
window.onload = function () {
    // 📌 팝업 관련 요소 가져오기
    const popup = document.getElementById("popup");
    const submitBtn = document.getElementById("submitBtn");
    const closeBtn = document.getElementById("closePopup");

    // 팝업 이벤트 추가
    if (submitBtn && popup && closeBtn) {
        submitBtn.addEventListener("click", function () {
            popup.style.display = "block";
            setTimeout(() => {
                popup.style.opacity = "1";
            }, 10);
        });

        closeBtn.addEventListener("click", function () {
            popup.style.opacity = "0";
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        });
    } else {
        console.error("팝업 관련 요소가 존재하지 않습니다.");
    }

    // 📌 섹션별 부드러운 스크롤 기능
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;

    elm.forEach(function (item, index) {
        item.addEventListener('wheel', function (event) {
            event.preventDefault();
            let delta = event.deltaY || -event.detail || event.wheelDelta;

            let moveTop = window.scrollY;
            let elmSelector = elm[index];

            // 🔽 휠을 아래로 내릴 때 (다음 섹션으로 이동)
            if (delta > 0) {
                if (index < elmCount - 1) {
                    moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                } else {
                    // 마지막 섹션일 경우 푸터로 이동
                    const footer = document.querySelector('footer');
                    if (footer) moveTop = footer.offsetTop;
                }
            }
            // 🔼 휠을 위로 올릴 때 (이전 섹션으로 이동)
            else {
                if (index > 0) {
                    moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                } else {
                    moveTop = 0; // 첫 섹션에서 위로 이동 방지
                }
            }

            window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
        });
    });
};
