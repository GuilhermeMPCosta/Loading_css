function Mostra(){
    let a = document.querySelector(".senha")
    let b = document.querySelector("#olho")
    a.type=a.type == 'text' ? 'password' : 'text'
    if (a.type=='text'){
        b.src='images/3844441-eye-see-show-view-watch_110305.svg'
    }else{
        b.src='images/3844443-disable-eye-inactive-see-show-view-watch_110296.svg'
    }
    

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