// --GANDALF ELEMENTS -- // 
const gandalf = document.getElementById("Gandalf");

// Gandalf Hair
const gandalf_hair_one = document.getElementById("gandalf_x5F_hair_x5F_one");

// Gandalf eyebrows;
const gandalf_left_eyebrow = document.getElementById("gandalf_x5F_left_x5F_eyebrow");
const gandalf_right_eyebrow = document.getElementById("gandalf_x5F_right_x5F_eyebrow");

// Gandalf Eyes
const gandalf_right_eyelid = document.getElementById("gandalf_x5F_right_x5F_eyelid");
const gandalf_right_bottom_eyelid = document.getElementById("gandalf_x5F_right_x5F_bottom_x5F_eyelid");
const gandalf_left_eyelid = document.getElementById("gandalf_x5F_left_x5F_eyelid");
const gandalf_left_bottom_eyelid = document.getElementById("gandalf_x5F_left_x5F_bottom_x5F_eyelid");

// Gandalf Hands & Controller
const gandalf_hands = document.getElementById("gandalf_x5F_hands");

const gandalf_left_joystick = document.getElementById("gandalf_x5F_left_x5F_joystick");
const gandalf_left_thumb = document.getElementById("left_Thumb");

const gandalf_right_joystick = document.getElementById("gandalf_x5F_right_x5F_joystick");
const gandalf_right_thumb = document.getElementById("Right_Thumb");

// -- GOLLUM ELEMENTS -- //

const gollum = document.getElementById("Gollum");

// Gollum Head and Hair 
const gollum_head = document.getElementById("gollum_x5F_head");
const gollum_hair_one = document.getElementById("gollum_x5F_left_x5F_hair_x5F_one");
const gollum_hair_two = document.getElementById("gollum_x5F_left_x5F_hair_x5F_two");
const gollum_hair_three = document.getElementById("gollum_x5F_left_x5F_hair_x5F_three");

// Gollum Hands & Controller
const gollum_hands = document.getElementById("gollum_x5F_controller_00000128478944557176670960000015930151561059717778_");

// Gollum Eyes
const gollum_left_eyelid = document.getElementById("gollum_x5F_left_x5F_upperlid");
const gollum_left_eyelash = document.getElementById("gollum_x5F_left_x5F_eyelash");
const gollum_left_bottom_eyelid = document.getElementById("gollum_x5F_left_x5F_lower_x5F_eyelid");

const gollum_right_eyelid = document.getElementById("gollum_x5F_right_x5F_eyelid");
const gollum_right_eyelash = document.getElementById("gollum_x5F_right_x5F_eyelash");
const gollum_right_bottom_eyelid = document.getElementById("gollum_x5F_right_x5F_lower_x5F_eyelid_00000132071278217579723230000009005009462936974992_");

// -- FRODO ELEMENTS -- //


const frodo_head = document.getElementById("frodo_x5F_head");
const frodo_hands = document.getElementById("frodo_x5F_hands");

const frodo_right_eyelash = document.getElementById("frodo_x5F_right_x5F_eyelash");
const frodo_left_eyelash = document.getElementById("frodo_x5F_left_x5F_eyelash");
const frodo_left_bottom_eyelid = document.getElementById("frodo_x5F_left_x5F_bottom_x5F_eyelid");
const frodo_right_bottom_eyelid = document.getElementById("frodo_x5F_bottom_x5F_right_x5F_eyelid");



// GANDALF SPECIFIC ANIMATIONS //

// makes gandalf blink his eyes whenever called
function gandalfBlink() {
    gsap.to(gandalf_right_eyelid, { height: 11, duration: 0.1, delay: 1, repeat: 1, yoyo: true, transformOrigin: "top" });
    gsap.to(gandalf_right_bottom_eyelid, { attr: { d: "M596.4,363.4c-13.8,18.3-26.7,15.8-38.9,0" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
    gsap.to(gandalf_left_eyelid, { height: 11, duration: 0.1, delay: 1, repeat: 1, yoyo: true, transformOrigin: "top" });
    gsap.to(gandalf_left_bottom_eyelid, { attr: { d: "M482.9,364.2c13.2,16.8,25.4,14.5,37.2,0" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
}


function gandalfBlinkLoop() {
    const gandalfTimer = Math.floor((Math.random() * 5) + 1) ;
    gandalfBlink();
    gsap.delayedCall(gandalfTimer, gandalfBlinkLoop);  
};

setTimeout(function () {gandalfBlinkLoop()}, Math.floor((Math.random() * 7 + 1) * 1000));

(function gandalfEyebrowLoop() {
    const gandalfTimer = Math.floor((Math.random() * 30) + 3) * 1000;

    setTimeout(function () {
        raiseEyebrows();
        gandalfEyebrowLoop();
    }, gandalfTimer);
}());


// GOLLUM SPECIFIC ANIMATIONS //

// makes gollum blink his eyes whenever called
function gollumBlink() {
    gsap.to(gollum_left_eyelid, { attr: { d: "M251.9,423.3l-21.6-0.1c0.1-11.3,9.8-20.7,21.6-20.7c11.8,0,21.6,9.4,21.6,20.8H251.9z" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
    gsap.to(gollum_left_eyelash, { y: 5, width: 43.4, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
    gsap.to(gollum_left_bottom_eyelid, { attr: { d: "M272.5,428l-0.6,0.9l0,0c-5.2,8.2-11.6,13.6-18.7,14.1c-0.6,0-1.2,0-1.8,0c-7.9-0.2-15-5.6-20.5-15l0,0h20.5H272.5z" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });

    gsap.to(gollum_right_eyelid, { attr: { d: "M313.2,423.5l21.6-0.1c-0.1-11.4-9.8-20.8-21.6-20.8s-21.6,9.5-21.6,21H313.2z" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
    gsap.to(gollum_right_eyelash, { y: 5, width: 43.4, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
    gsap.to(gollum_right_bottom_eyelid, { attr: { d: "M291.8,428l0.6,0.9l0,0c5.3,8.2,11.8,13.6,19.1,14.1c0.6,0,1.2,0,1.8,0c8-0.2,15.3-5.6,20.9-15l0,0h-20.9H291.8z" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });

}

(function gollumBlinkLoop() {
    const gollumTimer = Math.floor((Math.random() * 5) + 1);
    gollumBlink();
    gsap.delayedCall(gollumTimer, gollumBlinkLoop);  
}());


function animateGollumn() {
    gsap.to(gollum_head, { rotation: 5, duration: 3, delay: 0, repeat: -1, yoyo: true, transformOrigin: "center" });
    gsap.to(gollum_hair_one, { rotation: -7, duration: 3, delay: 0, repeat: -1, yoyo: true, transformOrigin: "top center" });
    gsap.to(gollum_hair_two, { rotation: -9, duration: 3, delay: 0, repeat: -1, yoyo: true, transformOrigin: "top center" });
    gsap.to(gollum_hair_three, { rotation: -2, duration: 2.9, delay: 0, repeat: -1, yoyo: true, transformOrigin: "top center" });
    gsap.to(gollum_head, { rotation: -5, duration: 3, delay: .9, repeat: -1, yoyo: true, transformOrigin: "center" });
}

// FRODO SPECIFIC ANIMATIONS

function frodoBlink() {
    gsap.to(frodo_left_eyelash, { height: 6.6, duration: 0.1, delay: 1, repeat: 1, yoyo: true, transformOrigin: "top" });
    gsap.to(frodo_right_eyelash, { height: 6.6, duration: 0.1, delay: 1, repeat: 1, yoyo: true, transformOrigin: "top" });
    gsap.to(frodo_right_bottom_eyelid, { attr: { d: "M841,402.8c-9.8,11.9-20.1,13.8-31.1,0H841z" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
    gsap.to(frodo_left_bottom_eyelid, { attr: { d: "M780.9,402.8c-10.7,13.8-20.8,11.9-30.4,0H780.9z" }, duration: 0.1, delay: 1, repeat: 1, yoyo: true, });
}

function frodoBlinkLoop() {
    const frodoTimer = Math.floor((Math.random() * 5) + 1);
    frodoBlink();
    gsap.delayedCall(frodoTimer, frodoBlinkLoop);
};

setTimeout(function () {frodoBlinkLoop()}, Math.floor((Math.random() * 7 + 1) * 1000));


function animateFrodo() {
    gsap.to(frodo_head, { rotation: 3, duration: 6, delay: 1, repeat: -1, yoyo: true, transformOrigin: "center" });
    gsap.to(frodo_head, { rotation: -3, duration: 6, delay: 6, repeat: -1, yoyo: true, transformOrigin: "center" });

    gsap.to("#Frodo", {rotate: 3, duration: 10, delay: 0, yoyo: true, repeat: -1, transformOrigin: "bottom center" } )
    gsap.to("#Frodo", {rotate: -3, duration: 10, delay: 10, yoyo: true, repeat: -1, transformOrigin: "bottom center" } )


}

animateFrodo();

// Global animations

// continously rotates hands & controller
function rotateHands(handsElement, reversed = false) {
    let randomRotation = Math.floor((Math.random() * 5) + 5);
    randomRotation = reversed ? randomRotation * -1 : randomRotation;
    const duration = Math.floor((Math.random() * 5) + 5);

    let handTimeLine = gsap.timeline({ repeat: -1, yoyo: true });
    handTimeLine
        .to(handsElement, { rotate: randomRotation, duration: .9, delay: 0, transformOrigin: "center" })
        .to(handsElement, { rotate: randomRotation, duration: .9, delay: 0, transformOrigin: "center" })
        .to(handsElement, { rotate: (randomRotation * -1), duration: .9, delay: 0, transformOrigin: "center" });
}

function animateJoysticks(character, thumbElement) {
    const joyStickTimeLine = gsap.timeline({ repeat: -1, yoyo: true });

    // add some variation to the rotation off the joystick & thumb movement
    let randomRotate = Math.floor((Math.random() * 10) + 10);
    randomRotate = randomRotate % 2 == 0 ? randomRotate : randomRotate * -1;
    const thumbMovement = randomRotate % 2 == 0 ? 2 : -2;

    joyStickTimeLine
        .to(gandalf_left_joystick, { rotate: randomRotate, duration: 1, transformOrigin: "center" })
        .to(gandalf_left_thumb, { x: thumbMovement, duration: 1, transformOrigin: "center", yoyo: false }, "-=1.2")
        .to(gandalf_right_joystick, { rotate: randomRotate * -1, duration: 1, transformOrigin: "center" })
        .to(gandalf_right_thumb, { x: thumbMovement * -1, duration: 1, transformOrigin: "center", yoyo: false }, "-=1.1")
        .to(gandalf_right_joystick, { rotate: randomRotate, duration: 1, transformOrigin: "center" })
        .to(gandalf_right_thumb, { x: thumbMovement, duration: 1, transformOrigin: "center", yoyo: false }, "-=1.1")
        .to(gandalf_right_joystick, { rotate: 0, duration: 1, transformOrigin: "center" })
        .to(gandalf_left_joystick, { rotate: (randomRotate * -1), duration: 1, transformOrigin: "center" }, "-=1.2")
        .to(gandalf_left_thumb, { x: thumbMovement * -1, duration: 1, transformOrigin: "center", yoyo: false }, "-=1.2")
        .to(gandalf_left_joystick, { rotate: 0, duration: 1, transformOrigin: "center" });
}

// contionusly moves eyebrows up and down, this can probably just be css
function animateEyebrows() {
    gsap.to(gandalf_left_eyebrow, { y: -2.5, duration: 1.3, delay: 0, repeat: -1, yoyo: true });
    gsap.to(gandalf_right_eyebrow, { y: -2.5, duration: 1.3, delay: 0, repeat: -1, yoyo: true });
}

function raiseEyebrows() {
    gsap.to(gandalf_left_eyebrow, { rotate: -10, duration: 1.3, yoyo: true, transformOrigin: "left" });
    gsap.to(gandalf_right_eyebrow, { rotate: 10, duration: 1.3, yoyo: true, transformOrigin: "right" });

    gsap.to(gandalf_left_eyebrow, { rotate: 0, duration: 1.3, delay: 5, transformOrigin: "left" });
    gsap.to(gandalf_right_eyebrow, { rotate: 0, duration: 1.3, delay: 5, transformOrigin: "right" });
}

function rockCharacterBody(characterElement) {
    const rockingTimeLine = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut" });
    rockingTimeLine
        .to(characterElement, { rotation: 2, duration: 3, yoyo: true, transformOrigin: "bottom center" })
        .to(characterElement, { rotation: -2, duration: 3, yoyo: true, transformOrigin: "bottom center" });
}

rockCharacterBody(gandalf);
// rockCharacterBody('#Frodo');

function runAnimation() {
    animateGollumn();
    animateJoysticks();
    animateEyebrows();
    rotateHands(gandalf_hands)
    rotateHands(gollum_hands, true);
    rotateHands(frodo_hands, true);

}

// Makes gandalf raise his eyebrows and gives hime some sass
setTimeout(function () {
    raiseEyebrows();
}, 1500);


runAnimation();

