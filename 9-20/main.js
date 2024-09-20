
function changeColor(){
    document.getElementById("text").style.color="red";
}
let count = 0;
function IncreaseCount() {

count++;
document.getElementById("counter").innerText=count;
if(count>4){
   count = 0;

}

}

function herasuCount() {

    count--;
    document.getElementById("counter").innerText=count;
}

