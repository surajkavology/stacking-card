 document.querySelectorAll(".card").forEach(function(cards){
    gsap.to(cards,{
        scale: 0.8,
        // filter: "blur(10px)",
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger: cards,
            start:"top top",
            end: "bottom top",
            scrub: true,
            // markers:true
        }
        
    });
 });    

// this is when we use css sticky 



// document.querySelectorAll(".card").forEach(function(card) {
//     gsap.to(card, {
//         scale: 0.8,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//             trigger: card,
//             start: "top 10%",       // When the card reaches the top of the viewport
//             end: "+=1000",           // Pin duration, adjust based on the scrolling length you want
//             pin: true,              // Pin the card
//             pinSpacing: false,      // Keeps the spacing consistent (adjust if necessary)
//             scrub: true            // Smoothly scrub through the animation
//         },
       
//     });
// });

// this is without css  sticky 