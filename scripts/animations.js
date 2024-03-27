// Left  Socket
const left_lower_eyelid = document.getElementById('left_x5F_lower_x5F_eyelid');
const left_upper_eyelid = document.getElementById('left_x5F_upper_x5F_eyelid');
const left_eyebrow = document.getElementById("left_x5F_eyebrow");
const left_eye = document.getElementById("left_x5F_eye");

// Right  Socket
const right_lower_eyelid = document.getElementById('right_x5F_lower_x5F_eyelid');
const right_upper_eyelid = document.getElementById('right_x5F_upper_x5F_eyelid');
const right_eyebrow = document.getElementById("right_x5F_eyebrow");
const right_eye = document.getElementById("right_x5F_eye");

const mouth = document.getElementById("mouth");
const torso = document.getElementById("torso")


function closeEyes() {
    // left eye code
    gsap.to(left_lower_eyelid, { attr: { d: "M323.6,359.1c0,0,0.7,0.6,1,0.6l-28.8-0.6c-0.9,10.5,4.7,18.3,12.1,19c0.3,0,0.5,0,0.8,0c0.5,0,0.8,0,1.4,0C315.7,377.3,323.5,371,323.6,359.1zz" }, duration: 0.3, yoyo: false, });
    gsap.to(left_upper_eyelid, { attr: { d: "M310,360.6l-12.1,0.4c0-0.1,0-0.3,0-0.4c0-13.3,5.5-24.2,12.2-24.2c6.7,0,12.2,10.9,12.2,24.2H310z" }, duration: 0.3, yoyo: false, });
    // right eye code
    gsap.to(right_upper_eyelid, { attr: { d: "M355.4,359.7l-13,0.5c0-0.2,0-0.2,0-0.5c0-13,5.9-23.7,13-23.7c7.1,0,13,10.7,13,23.7H355.4z" }, duration: 0.3, yoyo: false, });
    gsap.to(right_lower_eyelid, { attr: { d: "M343.5,357.4L343.5,357.4h23.4c0.2,12.8-5.2,19.8-10.8,19.8c-0.2,0-0.5,0-0.7,0c-0.5,0-0.7,0-1.2,0C348.4,377.8,344,371.4,343.5,357.4z" }, duration: 0.3, yoyo: false, });
}

function openEyes() {
    gsap.to(left_lower_eyelid, { attr: { d: "M318.5,374.5c0,0,0.4,0.1,0.6,0.1l-15.7-0.1c-0.5,2,2.6,3.5,6.6,3.6c0.1,0,0.3,0,0.4,0c0.3,0,0.4,0,0.7,0C314.2,378,318.4,376.8,318.5,374.5z" }, duration: 0.3, yoyo: false, });
    gsap.to(left_upper_eyelid, { attr: { d: "M310,346.8l-10.4,0.2c0-0.1,0-0.1,0-0.2c0-5.7,4.7-10.4,10.4-10.4c5.7,0,10.4,4.7,10.4,10.4H310z" }, duration: 0.3, yoyo: false, });
    gsap.to(right_lower_eyelid, { attr: { d: "M348.3,373.8L348.3,373.8h13.9c0.1,2.2-3.1,3.4-6.4,3.4c-0.1,0-0.3,0-0.4,0c-0.3,0-0.4,0-0.7,0C351.2,377.3,348.6,376.2,348.3,373.8z" }, duration: 0.3, yoyo: false, });
    gsap.to(right_upper_eyelid, { attr: { d: "M355.4,346.4l-10.4,0.2c0-0.1,0-0.1,0-0.2c0-5.7,4.7-10.4,10.4-10.4c5.7,0,10.4,4.7,10.4,10.4H355.4z" }, duration: 0.3, yoyo: false, });
}

function blinkEyes() {
    closeEyes();
    gsap.delayedCall(.5, openEyes);
}

(function blinkLoop() {
    const timer = Math.floor((Math.random() * 7) + 1);
    blinkEyes();
    return gsap.delayedCall(timer, blinkLoop);
})();

(function animateEyebrows() {
    gsap.to(left_eyebrow, { y: -1.5, duration: 1.3, delay: 0, repeat: -1, yoyo: true });
    gsap.to(right_eyebrow, { y: -1.5, duration: 1.3, delay: 0, repeat: -1, yoyo: true });
})();

function raiseEyebrows(raiseBoth) {
    if(raiseBoth){
        gsap.to(left_eyebrow, { rotate: -10, duration: 1.3, yoyo: true, transformOrigin: "left" });
        gsap.to(right_eyebrow, { rotate: 10, duration: 1.3, yoyo: true, transformOrigin: "right" });
        gsap.to(left_eyebrow, { rotate: 0, duration: 1.3, delay: 5, transformOrigin: "left" });
        gsap.to(right_eyebrow, { rotate: 0, duration: 1.3, delay: 5, transformOrigin: "right" });
    }  else {
        gsap.to(left_eyebrow, { rotate: -10, duration: 1.3, yoyo: true, transformOrigin: "left" });
        gsap.to(left_eyebrow, { rotate: 0, duration: 1.3, delay: 5, transformOrigin: "left" });


    }

}


function watchPaintTimeline(){
    const paintWatchingTimeline = gsap.timeline( { yoyo: false});
    paintWatchingTimeline.
     to(left_eye, { x:2, y: -5, duration: .5, }, 0)
    .to(right_eye, { x:2, y: -5, duration: .5, }, 0)
    .to(left_eye, { x:2, y: -2, duration: 1, }, )
    .to(right_eye, { x:2, y: -2, duration: 1, }, "<")
    .to(left_eye, { x:-3, y: -12, duration: 1, }, )
    .to(right_eye, { x:-3, y: -12, duration: 1, }, "<")
    // .to(mouth, { d:"M326.5,390.7c4,1.7,8.3,1.9,12.8,0.2", duration: 1, yoyo: false, })
    .to(left_eye, { x:0, y: 1, duration: 1.5, delay: 1.5 }, )
    .to(right_eye, { x:0, y: 1, duration: 1.5, }, "<")
    .to(torso, { y: -5, duration: .5})
    .to(torso, { y: 0, duration: .5})

    paintWatchingTimeline.add(raiseEyebrows(true), .8)
    return paintWatchingTimeline;

}


function moveEyesTimeline() {
    let eyeTimeline = gsap.timeline({ repeat: -1, yoyo: true});
   
    eyeTimeline
        .to(left_eye, { x: -4,  duration: 2, delay: 1,  }, 0)
        .to(right_eye, { x: -4,  duration: 2, delay: 1,  }, 0)
        .to(left_eye, { x: 0,  duration: 2, delay: 1,  }, 2)
        .to(right_eye, { x: 0, duration: 2, delay: 1,  }, 2);
    
        return eyeTimeline;
}

let eyeTimeline = moveEyesTimeline();


function eyebrowLoop() {
    raiseEyebrows();
    const timer = Math.floor((Math.random() * 7) + 15);
    return gsap.delayedCall(timer, eyebrowLoop);
}


gsap.delayedCall(13, () => {
    eyeTimeline.kill();
    let paintTimeline = watchPaintTimeline();
    
    gsap.delayedCall(6.6, () =>{
        paintTimeline.kill();
        eyeTimeline = moveEyesTimeline();
        gsap.delayedCall(5, eyebrowLoop);
    })
});


