$(".scroll").on("click", function (e) {
  let href = $(this).attr("href");
  let elementObject = $(href);

  $("html, body").animate({
    scrollTop: elementObject.offset().top - 50
  });
  e.preventDefault();
});

const navbarMenu = document.getElementsByClassName("scroll");

for (let index = 0; index < navbarMenu.length; index++) {
  navbarMenu[index].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    console.log(current);
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
