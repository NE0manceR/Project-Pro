let myFullpage = new fullpage('#fullpage', {
  navigation:'true',
  navigationPosition:'left',
  verticalCentered:'false',
    });

let slidePosition = 0;
let moveSlide = document.querySelector('.move-slide ');



document.querySelector('.left-btn').addEventListener('click', left = () =>{
  if( slidePosition == -940) {
    return
  }
  slidePosition -= 470;
  console.log(slidePosition);
  

  
  moveSlide.style.transform = `translateX(${slidePosition}px)`

})
document.querySelector('.right-btn').addEventListener('click', right = () =>{
  if( slidePosition == 0) {
    return
  }
  slidePosition += 470;
  console.log(slidePosition);
  

  
  moveSlide.style.transform = `translateX(${slidePosition}px)`

})








// ========================Partner slider=====

let partnerLeftBtn = document.querySelector('.partner-left-btn');
let partnerRighttBtn = document.querySelector('.partner-right-btn');
let partnerSlidePositiion = 0;
let slides = document.querySelectorAll('.partner-logo');
let check = slides.length / 2;
let checkMove = 0;



partnerLeftBtn.addEventListener('click', partnerLeftSlide = (event) => {
  console.log(document.body.clientWidth);
  
  if(checkMove  < check ) {
    console.log(checkMove);
    partnerSlidePositiion -= 239;
    document.querySelector('.partner-slides-wrap').style.transform = `translateX(${partnerSlidePositiion}px)`;
    checkMove++
  }
  
})

partnerRighttBtn.addEventListener('click', partnerRighttBtn = () => {
  if (checkMove == 0) {
    reutrn
    
  }
 
  if(checkMove <= check  ) {
    console.log(checkMove);
    partnerSlidePositiion += 239;
    document.querySelector('.partner-slides-wrap').style.transform = `translateX(${partnerSlidePositiion}px)`;
    checkMove--
  }
  

  
  
  
})



