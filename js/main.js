var header=document.querySelector(".header");window.addEventListener("scroll",function(){window.scrollY>400?header.classList.add("has-scrolled"):header.classList.remove("has-scrolled")});var homeBtns=Array.from(document.querySelectorAll(".js-home-btn"));if(homeBtns){var homeBlocks=Array.from(document.querySelectorAll(".js-home-block"));homeBtns.forEach(function(e,s){return e.addEventListener("click",function(){homeBtns.forEach(function(e,o){o===s?e.classList.add("is-active"):e.classList.remove("is-active")}),homeBlocks.forEach(function(e,o){o===s?e.classList.add("is-active"):e.classList.remove("is-active")})})})}