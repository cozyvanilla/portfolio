
  window.onload = function() {
        const form = document.getElementById("inquiryForm");
        const popup = document.getElementById("popup");
        const submitBtn = document.getElementById("submitBtn");
        const closeBtn = document.getElementById("closePopup");

        if (submitBtn && popup && closeBtn) {
            submitBtn.addEventListener("click", function(event) {
                event.preventDefault(); // 실제 폼 제출 방지
                popup.style.display = "block"; // 팝업 표시
            });

            closeBtn.addEventListener("click", function() {
                popup.style.display = "none"; // 팝업 닫기
            });
        } else {
            console.error("필요한 요소들이 하나 이상 없습니다.");
        }
    };

