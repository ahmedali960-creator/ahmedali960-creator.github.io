(function(){
var d=document,root=d.documentElement;
var info={
portfolio:["Portfolio website","A responsive personal site built with plain HTML, CSS and JavaScript: dark and light themes, mobile menu, certificate preview and project details. Source is in this repository."],
library:["Library Management System","Academic project using object-oriented programming and database concepts: classes and objects, CRUD operations and data management. Source files have not been added to this site yet."],
oop:["Programming and OOP practice","Academic exercises on searching and sorting algorithms, arrays, recursion, data structures and object-oriented programming, written in C#, C++ and Java. Source files have not been added to this site yet."],
sql:["SQL database practice","Practice writing SQL queries and designing databases with SQL Server. No project files have been added to this site yet."],
shop:["E-commerce product page","A practice project covering product cards, search, category filtering and cart interactions with HTML, CSS and JavaScript. No demo has been added to this site yet."]};
var dlg=d.getElementById("dlg");
d.querySelectorAll("[data-p]").forEach(function(b){b.addEventListener("click",function(){var i=info[b.dataset.p];d.getElementById("dt").textContent=i[0];d.getElementById("db").textContent=i[1];dlg.showModal()})});
d.getElementById("cert-open").addEventListener("click",function(){d.getElementById("cdlg").showModal()});
[dlg,d.getElementById("cdlg")].forEach(function(x){x.addEventListener("click",function(e){if(e.target===x)x.close()})});
var burger=d.getElementById("burger"),menu=d.getElementById("menu");
burger.addEventListener("click",function(){var o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
menu.addEventListener("click",function(e){if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});
var tb=d.getElementById("theme");
function label(){tb.setAttribute("aria-label",root.dataset.theme==="light"?"Switch to dark theme":"Switch to light theme")}
tb.addEventListener("click",function(){var n=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}label()});label();
var els=d.querySelectorAll(".reveal");
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add("in")});
})();
