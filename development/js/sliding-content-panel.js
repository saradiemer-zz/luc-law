// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("wrapper").style.marginRight = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
// }
//
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("wrapper").style.marginRight= "0";
//     document.body.style.backgroundColor = "white";
// }

function openNav(){
    document.getElementById("mySidenav").style.width = "600px";
    document.getElementById("overlay").style.display = "block";
    $('#profileContent01').load('test01.html');
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

function closeNavOverlay() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("overlay").style.width = "0";
}
