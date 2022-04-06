const ligar = document.getElementById("turnOn");
const desligar = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");

function lampOn() {
    if(!quebrou()){
    lamp.src = 'ligada.jpg';
    }
    
}

function lampOff() {
    if(!quebrou()){
        lamp.src = 'desligada.jpg';
        }
}

function broke() {
    lamp.src = 'quebrada.jpg';
}

function quebrou() {
   return lamp.src.indexOf('quebrada') > -1;
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', broke);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
