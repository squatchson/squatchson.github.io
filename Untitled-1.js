function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.button').classList.toggle('active');
}
function clog(){
    console.log("hello world")
}

function alert1(){
    alert("this is a test")
}

const pastDate = new Date('2026-3-5')
const nowDate = new Date()
const msPerDay = 24 * 60 * 60 * 1000
const past=Math.floor((nowDate-pastDate)/msPerDay)
console.log(past)
document.getElementById("thatchSiteUpdate").innerHTML="<p>Thatch, its been "+past+" days, lock tf in.<br>shame</p>";
