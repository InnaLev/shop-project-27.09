
let button = document.getElementById('burger');

let navigation = document.getElementById('menu');

button.addEventListener('click', function () {
    navigation.classList.toggle('header__menu-show');
});

window.onload = function () {



    let sortingButton = document.querySelector(".sort__btn");
    sortingButton.onclick = function (e) {
        let tag = e.target;
        console.log(tag);
        let btn = this.querySelector(".sort__btn");

        console.log(tag.classList != 'sorting__button');

        if (tag.classList == 'sort__btn') {
            document.querySelector(".sorting__list").classList.toggle("sorting__list-active");
            document.querySelector(".sort__btn").classList.toggle("sorting__button-active");
            document.querySelector(".sorting__button-active").classList.remove("sort__btn");
            return;
        }

        if (tag.classList == 'sorting__button-active') {
            document.querySelector(".sorting__list").classList.toggle("sorting__list-active");
            document.querySelector(".sorting__button-active").classList.toggle("sort__btn");
            document.querySelector(".sort__btn").classList.remove("sorting__button-active");
            return;
        }


    }


    const wrapper = document.querySelector(".wrapper");

    wrapper.onclick = function (e) {
        let targets = e.target;
        let filterSorting = document.querySelector(".filter__sorting");
        let sortingButtonActive = document.querySelector(".sorting__button-active");


        if (!filterSorting.contains(targets) && sortingButtonActive) {
            document.querySelector(".sorting__list").classList.toggle("sorting__list-active");
            document.querySelector(".sorting__button-active").classList.toggle("sort__btn");
            document.querySelector(".sort__btn").classList.remove("sorting__button-active");
        }

    }





}