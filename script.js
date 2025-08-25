const button = document.getElementById('scaryButton');
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');
const flash = document.getElementById('flash');
const flashSound = document.getElementById('flashSound');
const jump = document.getElementById('jump');
const jumpSound = document.getElementById('jumpSound');
const body = document.body;

button.addEventListener('mouseenter', () => { hoverSound.currentTime=0; hoverSound.play(); });
button.addEventListener('click', () => {
    clickSound.play();
    setTimeout(()=> {
        window.location.href='https://www.youtube.com/watch?v=oPLObjVAvIU&pp=ygUc0YDQuNC60YDQvtC70LsgMTAg0YfQsNGB0L7Qsg%3D%3D';
    },500);
});

function randomFlash() {
    const duration = Math.random()*200+100;
    flash.style.opacity = 0.8;
    flash.style.background = Math.random()>0.5?'white':'red';
    flashSound.currentTime=0; flashSound.play();
    setTimeout(()=>{ flash.style.opacity=0; }, duration);
    setTimeout(randomFlash, Math.random()*5000+2000);
}

function randomJump() {
    const delay = Math.random()*10000 + 5000;
    setTimeout(()=>{
        flash.style.opacity=0.9; flash.style.background='red';
        jump.style.opacity=1;
        body.classList.add('shake-screen');
        jumpSound.currentTime=0; jumpSound.play();
        setTimeout(()=>{
            flash.style.opacity=0;
            jump.style.opacity=0;
            body.classList.remove('shake-screen');
        },500);
        randomJump();
    }, delay);
}

randomFlash();
randomJump();
