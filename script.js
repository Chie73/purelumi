const text = document.querySelector(".text h1");
const textContent = text.textContent;
const textArray = textContent.split("");
text.textContent = "";
textArray.forEach(function(char,index){
    const span = document.createElement("span");
    span.textContent = char;
    text.appendChild(span);
    setTimeout(function(){
        span.style.opacity = "1";

        },index * 150);
})

const pText = document.querySelector(".text p");
const pTextContent = pText.textContent;
const pTextArray = pTextContent.split("");
pText.textContent = "";
pTextArray.forEach(function(char,index){
    const span = document.createElement("span");
    span.textContent = char;
    pText.appendChild(span);
    setTimeout(function(){
        span.style.opacity = "1";
    },index * 150);
})
const nav = document.querySelector("nav");
const mainvisual = document.querySelector(".mainvisual");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a"); 

window.addEventListener("scroll", function() {

    const scrollY = window.scrollY;

    if (scrollY > mainvisual.offsetHeight) {

        console.log("固定された");

        nav.style.position = "fixed";
        nav.style.top = "10px";
        nav.style.height = "60px";
        nav.style.left = "50%";
        nav.style.transform = "translateX(-50%)";
        nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
        nav.style.width = "80%";

        nav.style.flexDirection = "row";
        nav.style.marginTop = "0";
        nav.style.marginRight = "0";
        nav.style.padding = "0";
        nav.style.justifyContent = "center";

        if (window.innerWidth > 750) {
            nav.style.display = "flex";
            menu.style.display = "flex";
            menu.style.gap = "25px";
            menu.style.justifyContent = "center";
        }

    } else {

        nav.style.width = "";
        nav.style.height = "";
        nav.style.top = "";
        nav.style.left = "";
        nav.style.transform = "";
        nav.style.position = "";
        nav.style.display = "";
        nav.style.flexDirection = "";
        nav.style.marginTop = "";
        nav.style.marginRight = "";
        nav.style.padding = "";

        menu.style.display = "";
    }

});


const humburger = document.querySelector(".humburger");
const header = document.querySelector("header");
humburger.addEventListener("click", function(){
    humburger.classList.add("fade-in-mobile");
    if(menu.style.display === "none"|| menu.style.display === ""){
        menu.style.display = "flex";
        nav.style.display = "flex";
        header.style.backgroundColor = "#FFFDF7";
        header.style.height = "100vh";
        console.log("メニュー開いた");
    }
    else{
        menu.style.display = "none";
        nav.style.display = "none";
        header.style.backgroundColor = "";
    }

});

const buyButton = document.querySelector(".buy-button");
window.addEventListener("scroll",function(){
    const scrollY = window.scrollY;
    if(scrollY > mainvisual.offsetHeight){
        buyButton.style.position = "fixed";
        buyButton.style.display = "flex";
    }
    else{
        buyButton.style.position = "";
        buyButton.style.display = "";
    }
})

const title = document.querySelectorAll(".section-title");
    window.addEventListener("scroll",function(){
        title.forEach(function(title){
            const titlePosition = title.getBoundingClientRect();
            const titleTop = titlePosition.top;
            if(titleTop < window.innerHeight){
                title.classList.add("show");
            }
        });
    });
const concept = document.querySelector(".concept");
window.addEventListener("scroll",function(){
    const scrollY = window.scrollY;
    if(scrollY > 195){
        concept.classList.add("fade-in");
        concept.style.marginBottom = "150px"
    }
})

const productItemImg = document.querySelectorAll(".product-item img");
window.addEventListener("scroll",function(){
    const scrollY = window.scrollY;
        productItemImg.forEach(function(img){
            const imgPosition = img.getBoundingClientRect();
            const imgTop = imgPosition.top;
            if(imgTop < window.innerHeight * 0.8){
                img.classList.add("fade-in");

            }
    });
});

const textMessage = document.querySelector(".text-message");
window.addEventListener("scroll",function(){
    const scrollY = window.scrollY;
    if(scrollY > 2095){
        textMessage.classList.add("fade-in");
    }
});

const question = document.querySelectorAll(".question");
question.forEach(function(question){
    question .addEventListener("click", function(){
        const answer = this .nextElementSibling;
        if(answer.style.maxHeight === "200px"){
            answer.style.paddingTop = "0";
            answer.style.paddingBottom = "0";
            answer.style.maxHeight = "0";
            answer.classList.remove("open");
            this.classList.remove("open");
            this .querySelector("span:last-child").textContent = "＋";
        }else{
            answer.style.maxHeight = "200px";
            answer.style.paddingTop = "20px";
            answer.style.paddingBottom = "20px";
            this.querySelector("span:last-child").textContent = "－";
            answer.classList.add("open");
            this.classList.add("open");
        }
    });
    
});
const nextButtons = document.querySelectorAll(".next");
const slider = document.querySelector(".slider");
let currentIndex = 0;

nextButtons.forEach(function(nextButton){
    nextButton.addEventListener("click", function(){
        if(currentIndex < 4){
        currentIndex++;
        }
        else{
            currentIndex = 0;
        }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});
const familyImg = document.querySelector(".family-img");
window.addEventListener("scroll",function(){
    const scrollY = window.scrollY;
    if(scrollY > 3200){
        familyImg.classList.add("fade-in");
    }
});
const bottleImg = document.querySelector(".bottle-img");
window.addEventListener("scroll",function(){
    const scrollY = window.scrollY;
    console.log(scrollY);
    if(scrollY > 3700){
        bottleImg.classList.add("fade-in");
    }
});

window.addEventListener("scroll",function(){
    const tree = document.querySelector(".tree img");
    const scrollY = window.scrollY;
    tree.style.transform = `translateY(${-scrollY * 0.1}px)`;
})

 