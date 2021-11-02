const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".tab-item");
const contents = $$(".tab-pane");

tabs.forEach((tab, index) => {
  tab.onclick = () => {
    // arrow function nen k bind this duoc
    $(".tab-item.active").classList.remove("active");
    tab.classList.add("active");
    $(".tab-pane.active").classList.remove("active");
    contents[index].classList.add("active");
    $(".line").style.left = tab.offsetLeft + "px";
    $(".line").style.width = tab.offsetWidth + "px";
  };
});
