const imgs= document.querySelectorAll('.hero-section ul img');
const prevBtn= document.querySelector('.control_prev');
const nextBtn= document.querySelector('.control_next');

let n=0;

function changeslide(){
    for(let i=0 ; i<imgs.length ; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeslide();

prevBtn.addEventListener('click', (e)=>{
    if(n<=0){
        n= imgs.length -1;
    }else{
        n--;
    }
    changeslide();
});

nextBtn.addEventListener('click', (e)=>{
    if(n>= imgs.length -1){
        n=0;
    }else{
        n++;
    }
    changeslide();
});