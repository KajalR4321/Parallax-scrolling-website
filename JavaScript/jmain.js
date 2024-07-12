/* scroll part use in java script*/
const text=document.querySelector("h1");
const birds=document.querySelector(".birds");
const land=document.querySelector(".land");
/*event use->take event ,and second listner function*/
window.addEventListener("scroll",()=>{
   /* us ethis code to scroll parallax*/
    let scroll=window.scrollY;
  text.style.marginTop = scroll*0.7+'px';
  birds.style.left = scroll*2+'px';
  land.style.top = scroll*1.2+'px';
})
