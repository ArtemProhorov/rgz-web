// Установка активной ссылки в меню
function setActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".sidebar a");

  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Вызываем при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  setActiveMenu();
});
