document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const paymentBtn = document.getElementById("paymentBtn");
    const paymentPlatform = document.getElementById("paymentPlatform");
    const closeBtn = document.querySelector(".close-btn");

    navItems.forEach(item => {
        const button = item.querySelector(".nav-button");
        const menu = item.querySelector(".menu");
        const popup = item.querySelector(".popup");

        button.addEventListener("mousemove", (e) => {
            popup.style.display = "block";
            popup.style.left = `${e.pageX + 10}px`;
            popup.style.top = `${e.pageY + 10}px`;
        });

        button.addEventListener("mouseleave", () => {
            popup.style.display = "none";
        });

        button.addEventListener("click", (e) => {
            e.stopPropagation(); 
            document.querySelectorAll(".menu").forEach(m => {
                if (m !== menu) m.style.display = "none";
            });
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
        });

        document.addEventListener("click", (e) => {
            if (!item.contains(e.target)) {
                menu.style.display = "none";
            }
        });
    });

    paymentBtn.addEventListener("click", () => {
        paymentPlatform.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        paymentPlatform.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === paymentPlatform) {
            paymentPlatform.style.display = "none";
        }
    });
});
