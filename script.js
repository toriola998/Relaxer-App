const container = document.querySelector('.container');
const text = document.getElementById('text');

const totalTime = 7500 //in milliseconds (7.5s)
const breathTime = (totalTime/ 5) * 2;
const holdTime = totalTime / 5;


breathInAndOut();

function breathInAndOut (){
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow' 

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breath Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)   
}

setInterval(breathInAndOut, totalTime) //run the function every 7500 (7.5s)