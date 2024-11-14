document.querySelector(".gallery").addEventListener("click",function(e){e.target.closest(".list-item__link")&&e.preventDefault()});var e=document.querySelector("ul"),t=document.getElementById("largeImg");e.addEventListener("click",function(e){var r=e.target.closest(".list-item__link");if(r){var l=r.getAttribute("href");t.setAttribute("src",l)}});
//# sourceMappingURL=index.1f4f974b.js.map
