function call(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
call()
gsap.from("#photu1",{
   x:400,
   opacity:0,
   duration:1,
   ease:"export.easeInOut"
})
gsap.from("#blackline",{
    scrollTrigger:{
        trigger:"#blackline",
        scroller:"#main",
        start:"top 50%",
        end:"top 25%",
        scrub:1,
    },
    x:300,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
 })
 gsap.from("#borderbb",{
    scrollTrigger:{
        trigger:"#borderbb",
        scroller:"#main",
        start:"top 80%",
        end:"top 20%",
        scrub:1,
    },
    x:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
 })
 gsap.from("#second p",{
    scrollTrigger:{
        trigger:"#second p",
        scroller:"#main",
        start:"top 90%",
        end:"top 70%",
        scrub:1,
    },
    y:80,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
 })
 gsap.from(".cards",{
    scrollTrigger:{
        trigger:".cards",
        scroller:"#main",
        start:"top 80%",
        end:"top 50%",
        scrub:1,
    },
    y:100,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
 })
 gsap.from("#main5left h1",{
    scrollTrigger:{
        trigger:"#main5left h1",
        scroller:"#main",
        start:"top 80%",
        end:"top 50%",
        scrub:1,
    },
    x:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
 })


var tl=gsap.timeline();
tl.from("#main5border2",{
    scrollTrigger:{
        trigger:"#main5border2",
        scroller:"#main",
        start:"top 50%",
        end:"top 50%",
        scrub:1,
    },
    y:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
})
var tl=gsap.timeline();
tl.from("#main5border",{
    scrollTrigger:{
        trigger:"#main5border",
        scroller:"#main",
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    },
    y:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
},)
tl.from("#main6photu",{
    scrollTrigger:{
        trigger:"#main6photu",
        scroller:"#main",
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    },
    y:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
},)
gsap.from("#part7middle",{
    scrollTrigger:{
        trigger:"#part7middle",
        scroller:"#main",
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    },
    y:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
},)
gsap.from(".part7card",{
    scrollTrigger:{
        trigger:".part7card",
        scroller:"#main",
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    },
    x:200,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
},)
gsap.from("#part7nevh3 h3",{
    scrollTrigger:{
        trigger:"#part7nevh3 h3",
        scroller:"#main",
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    },
    x:200,
    opacity:0,
    duration:1,
    stagger:2,
    ease:"export.easeInOut"
},)
gsap.from("#part1 h3",{
    x:200,
    opacity:0,
    stagger:0.2,
    ease:"export.easeInOut"
},)
gsap.from("#part7text1,#part7text2",{
    scrollTrigger:{
        trigger:"#part7text1,#part7text2",
        scroller:"#main",
        start:"top 90%",
        end:"top 60%",
        scrub:1,
    },
    x:200,
    stagger:1,
    opacity:0,
    duration:1,
    ease:"export.easeInOut"
},)
gsap.from("#part7rightbuttomnav",{
    scrollTrigger:{
        trigger:"#part7rightbuttomnav",
        scroller:"#main",
        start:"top 95%",
        end:"top 80%",
        scrub:1,
    },
    x:-200,
    opacity:0,
    duration:5,
    delay:2,
    ease:"export.easeInOut"
},)