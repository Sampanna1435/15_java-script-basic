const slide = document.querySelector(".slide")
const images = document.querySelectorAll(".slide img");

console.log(images[images.length - 1]);
console.log(images);
///
///
slide.insertBefore(images[images.length - 1], images[0]);

//button左
const leftBtn = document.querySelector(".leftBtn");

leftBtn.addEventListener("click", function () {
    //
    const slideImages = document.querySelectorAll(".slide img");
    console.log(slideImages);///クリクを押した時点でのhtml
    ///左側のな画像を、最後の移動
    slide.appendChild(slideImages[0]);
    //入っているstyleを消す
    slideImages[1].removeAttribute("style");
    ///slideImages[0].style.marginLeft = "-100%";
});
//right
const rightBtn = document.querySelector(".rightBtn");
rightBtn.addEventListener("click", function () {
    ///
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0";
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
});


///slide

const leftSlider = function () {
    const slideImages = document.querySelectorAll(".slide img");
    slide.appendChild(slideImages[0]);
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].removeAttribute("style");
    }
};

const rightSlider = function () {
    const slideImages = document.querySelectorAll(".slide img");
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
    for (let i = 0; i < slideImages.length; i++) {
        slideImages[i].removeAttribute("style");
    }
};

//クリックイベントも書き換えます。
leftBtn.addEventListener("click", leftSlider);
rightBtn.addEventListener("click", rightSlider);
window.setInterval(leftSlider, 2000);
