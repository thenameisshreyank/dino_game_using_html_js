score=0;

document.onkeydown =function(e){
    
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=>{
            dino.classList.remove('animatedino')
        },700);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= dx+125+'px';
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= dx-125+'px';
    }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    obstacle=document.querySelector('.obstacle');
    gameover=document.querySelector('.gameover');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    
    if(offsetx <100 && offsety<50){
        gameover.style.visiblity='visible';
        obstacle.classList.remove('animateobstacle');
    }
    else{
        ++score;
        scorevalue=document.querySelector('.scorecount');
        scorevalue.innerHTML="your score is :"+ score;
    }
   
    
},100);