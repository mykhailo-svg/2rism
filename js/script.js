const inputPlaceHolder=document.querySelector(".footer__input__placeholder"),inputElem=document.querySelector(".footer__input__elem");inputElem.addEventListener("click",(function(){inputPlaceHolder.classList.contains("footer__placeholder__top")||inputPlaceHolder.classList.add("footer__placeholder__top")}));const burgerButton=document.querySelector(".burger__button__clickable"),burgerBody=document.querySelector(".burger__body"),burgerDecors=document.querySelectorAll(".burger__decor"),mainBody=document.querySelector("body");burgerButton.addEventListener("click",(function(){mainBody.classList.toggle("body__noScroll"),burgerBody.classList.length<2?burgerBody.classList.add("burger__show"):(burgerBody.classList.toggle("burger__hide"),burgerBody.classList.toggle("burger__show"));for(let e=0;e<burgerDecors.length;e++)burgerDecors[e].classList.toggle("burger__dec__active")}));const burgerLinks=document.querySelectorAll(".burger__links__item");for(let e=0;e<burgerLinks.length;e++)burgerLinks[e].addEventListener("click",(function(){mainBody.classList.toggle("body__noScroll"),burgerBody.classList.toggle("burger__hide"),burgerBody.classList.toggle("burger__show");for(let e=0;e<burgerDecors.length;e++)burgerDecors[e].classList.toggle("burger__dec__active")}));const navSubMenuButons=document.querySelectorAll(".scroll__btn[data-goto]");function scroll(e){const t=e.target,o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset;window.scrollTo({behavior:"smooth",top:o})}for(let t=0;t<navSubMenuButons.length;t++)navSubMenuButons[t].addEventListener("click",scroll);const animItems=document.querySelectorAll("._anim-items");if(animItems.length>0){function animOnScroll(){for(let e=0;e<animItems.length;e++){const t=animItems[e],o=t.offsetHeight,r=offset(t).top,n=2;let l=window.innerHeight-o/n;o>window.innerHeight&&(l=window.innerHeight-window.innerHeight/n),pageYOffset>r-l&&pageYOffset<r+o?t.classList.add("an_active"):t.classList.contains("_anim-no-hide")||t.classList.remove("an_active")}}function offset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft;return scrollTop=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+scrollTop,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),400)}