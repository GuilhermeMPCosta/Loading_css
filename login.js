function Mostra(){
    let a = document.querySelector(".senha")
    a.type=a.type == 'text' ? 'password' : 'text'
}

function login(){
    let a = document.querySelector("#login")
    a.classList.add("swirl-out-fwd")
    redirect_Page()
}

function redirect_Page () {
    var tID = setTimeout(function () {
        window.location.href = "/login.html";
        window.clearTimeout(tID);
    }, 730)
}