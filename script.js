function menu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navigation").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
 var home = document.getElementById("home");
 var prod = document.getElementById("product");
 var serv = document.getElementById("services");
 var events = document.getElementById("events");
 var cont = document.getElementById("contact");

 home.onclick = function(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navigation").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    btn_slide(1);
}

 prod.onclick = function(){
     document.getElementById("menu").classList.toggle("change");
     document.getElementById("navigation").classList.toggle("change");
     document.getElementById("menu-bg").classList.toggle("change-bg");
     btn_slide(2);
}

serv.onclick = function(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navigation").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    btn_slide(3);
}

events.onclick = function(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navigation").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    btn_slide(4);
}

cont.onclick = function(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navigation").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    btn_slide(5);
}