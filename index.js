const mobileBtn = document.getElementById('mobile-cta')
                nav = document.querySelector('nav')
                mobileBtnExit = document.getElementById('mobile-cta-exit')
                purple= document.querySelector('.purple')
                purpletext=document.getElementById('purple')
                body=document.querySelector('body');

mobileBtn.addEventListener('click', ()=> {
                nav.classList.add('menu-btn');
 })

mobileBtnExit.addEventListener('click', ()=> {
                nav.classList.remove('menu-btn');
})

var flag=0;

purple.addEventListener('click', ()=> {
    if(flag==0){
        body.classList.add('prpl');
        purpletext.innerHTML= 'Blue is better';
        purpletext.style.border= "3px solid #5eaaa8";
        purpletext.style.color="#5eaaa8";
        flag=1;
    } else{
        body.classList.remove('prpl');
        purpletext.innerHTML= 'I like purple';
        purpletext.style.border= "3px solid #301b3f";
        purpletext.style.color="#301b3f";
        flag=0;
    }
            
})

        

const snare = document.getElementById("snare")
        bass=document.getElementById("bass")
        cymbal = document.getElementById("cymbal");


snare.addEventListener('click', () =>{
        var audioSnare = new Audio('sounds/snare.mp3');
        audioSnare.play();
})

bass.addEventListener('click', () =>{
    var audioBass = new Audio('sounds/kick-bass.mp3');
    audioBass.play();
})

cymbal.addEventListener('click', () =>{
    var audioCymbal = new Audio('sounds/crash.mp3');
    audioCymbal.play();
})


document.addEventListener('keydown', (event) => {
    switch(event.key){
        case "a":
            var audioSnare = new Audio('sounds/snare.mp3');
            audioSnare.play();
        break;

        case "w":
            var audioBass = new Audio('sounds/kick-bass.mp3');
            audioBass.play();
        break;

        case "d":
            var audioCymbal = new Audio('sounds/crash.mp3');
            audioCymbal.play();
        break;

        default: console.log(event.key)
    }
    
})

