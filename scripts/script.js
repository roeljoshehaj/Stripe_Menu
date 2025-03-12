document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        const button = item.querySelector(".nav-button");
        const menu = item.querySelector(".menu");

        button.addEventListener("click", () => {
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
});
