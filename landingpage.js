const closeBtn = document.getElementById("close");
const closeBtn1 = document.getElementById("close1");
const closeBtn2 = document.getElementById("close2");
const bookNow = document.getElementById("book_now");
const bookNow1 = document.getElementById("book_now1");
const bookNow2 = document.getElementById("book_now2");
const btn1 = document.getElementById("btn1");
const submitbtn = document.getElementById("submit");

const formdiv = document.querySelector(".formdiv_bg");
const formdiv1 = document.querySelector(".formdiv_bg1");
const formdiv2 = document.querySelector(".formdiv_bg2");
const form = document.querySelector(".form")
const paymentform = document.querySelector(".paymentform")
const succuessform = document.querySelector(".success_div");

closeBtn.addEventListener('click', function(){
    formdiv.style.display = "none";
})

closeBtn1.addEventListener('click', function(){
    formdiv1.style.display = "none";
    formdiv.style.display = "none";
})

closeBtn2.addEventListener('click', function(){
    formdiv1.style.display = "none";
    formdiv.style.display = "none";
    formdiv2.style.display = "none";
})

bookNow.addEventListener('click', function(){
    formdiv.style.display = "flex";
    form.style.display = "flex"
})

bookNow1.addEventListener('click', function(){
    formdiv.style.display = "flex";
    form.style.display = "flex"
})

bookNow2.addEventListener('click', function(){
    formdiv.style.display = "flex";
    form.style.display = "flex"
})

btn1.addEventListener('click', function () {
    formdiv1.style.display = "flex";
    form.style.display = "none"
    paymentform.style.display = "flex"
    formdiv.style.display = "none";
})

submitbtn.addEventListener('click', function () {
        formdiv2.style.display = "flex";
        succuessform.style.display = "flex";
        formdiv1.style.display = "none";
        form.style.display = "none"
        paymentform.style.display = "none"
        formdiv.style.display = "none";
})


