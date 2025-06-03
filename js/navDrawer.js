const icon = document.getElementById('menu-icon');
const menu = document.getElementById('header-item-5');
const closeBtn = document.getElementById('close-btn');
const innerCloseBtn = document.getElementById('inner-close-btn');
const dropDown = document.getElementById('drop-down-hover1');
const dropDownItems = document.getElementById('drop-down-items1');
const dropDownWrapper = document.getElementById('drop-down-wrapper1');
let toggle = false;

icon.addEventListener('click', () => {
  menu.classList.add('active');
});

dropDown.addEventListener('click', () => {
  toggleDropDown();
});

const toggleDropDown = () => {
  if(toggle) {
    innerCloseBtn.style.transform = "rotate(0deg)";
    dropDownItems.classList.toggle('active');
    dropDownWrapper.classList.toggle('active1');
    dropDown.style.marginBottom = '0';
  }
  else {
    innerCloseBtn.style.transform = "rotate(180deg)";
    dropDownItems.classList.toggle('active');
    dropDownWrapper.classList.toggle('active1');
        dropDown.style.marginBottom = '10px';
  }
  toggle = !toggle;
}

innerCloseBtn.addEventListener('click', () => {
  toggleDropDown();
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    dropDownItems.classList.remove('active');
    dropDownWrapper.classList.remove('active1');
});