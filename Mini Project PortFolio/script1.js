
const number = "7300526322"
replace =() => { document.getElementById("Contact").innerHTML = number;}
againreplace =() => { document.getElementById("Contact").innerHTML = "CONTACT"}


const tempLoad = () => {
let temp1 = document.getElementById('Contact');

setTimeout(() => {
    temp1.style.color = "#660000";
}, 1000);


setTimeout(() => {
    temp1.style.color = "#d63031";
}, 2000);

setTimeout(() => {
   temp1.style.color = "#C71585";
}, 3000);

setTimeout(() => {
    temp1.style.color = "#d63031";
}, 4000);
}
tempLoad();

setInterval(tempLoad, 5000)