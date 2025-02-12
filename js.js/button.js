window.onload = function() {
    const popup = document.getElementById("popup"); 
    const submitBtn = document.getElementById("submitBtn"); 
    const closeBtn = document.getElementById("closePopup");

    if (submitBtn && popup && closeBtn) { 
        submitBtn.addEventListener("click", function(event) {
            popup.style.display = "block"; 
            setTimeout(() => {
                popup.style.opacity = "1"; 
            }, 10); // 약간의 지연을 줘서 애니메이션이 자연스럽게 실행됨
        });

        closeBtn.addEventListener("click", function() {
            popup.style.opacity = "0"; 
            setTimeout(() => {
                popup.style.display = "none";
            }, 300); // opacity 애니메이션 지속 시간(0.3초) 후 display를 none으로 변경
        });
    } else {
        console.error("필요한 요소들이 하나 이상 없습니다.");
    }
};
