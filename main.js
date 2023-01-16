import './styles/style.scss';

const path1 = document.querySelector('#path-1');
const path2 = document.querySelector('#path-2');
const path3 = document.querySelector('#path-3');
const path4 = document.querySelector('#path-4');
const path5 = document.querySelector('#path-5');

const path1d = 'M0 424L129 375L257 441L386 406L514 384L643 383L771 448L900 428L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path2d = 'M0 463L129 465L257 431L386 409L514 413L643 456L771 459L900 396L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path3d = 'M0 493L129 425L257 502L386 445L514 511L643 490L771 441L900 482L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path4d = 'M0 500L129 536L257 510L386 513L514 496L643 508L771 484L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path5d = 'M0 558L129 530L257 558L386 550L514 543L643 569L771 563L900 538L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';

gsap.to(path1, { duration: 1, attr: {d: path1d}, yoyo: true, repeat: -1 });
gsap.to(path2, { duration: 1, attr: {d: path2d}, yoyo: true, repeat: -1, delay: 0.3 });
gsap.to(path3, { duration: 1, attr: {d: path3d}, yoyo: true, repeat: -1 })
gsap.to(path4, { duration: 1, attr: {d: path4d}, yoyo: true, repeat: -1, delay: 0.3 });
gsap.to(path5, { duration: 1, attr: {d: path5d}, yoyo: true, repeat: -1 });

let menuIsOpen = false;
const menu = document.querySelector('nav');
const menuOptions = document.querySelectorAll('nav>ul>li>a');
let windowView = window.matchMedia("(min-width: 768px)");

function closeMenu() {
    gsap.fromTo('nav', {opacity:1, x: 0, display:'grid'}, {opacity:0, x: 500, duration: 0.5, display:'none'})
        let t2 = gsap.timeline({ defaults: {duration: 0.15} } );
        t2.to(".second-row>span:nth-child(1)", {x:0, y:0});
        t2.to(".third-row>span:nth-child(2)", {x:0, y:0});
        t2.to(".second-row>span:nth-child(3)", {x:0, y:0});
        t2.to(".first-row>span:nth-child(2)", {x:0, y:0});
    menuIsOpen = false;
}

document.querySelector('.menuToggleBtn').addEventListener('click', () => {
    if (!menuIsOpen) { // Mobile menu button handler
        gsap.fromTo('nav', {display:'none', opacity:0, x: 500},{display:'grid',opacity:1, x: 0, duration: 0.3})
        let tl = gsap.timeline({ defaults: {duration: 0.15} } );
        tl.to(".first-row>span:nth-child(2)", {x:8.6, y:8.6});
        tl.to(".second-row>span:nth-child(3)", {x:-8.6, y:8.6});
        tl.to(".third-row>span:nth-child(2)", {x:-8.6, y:-8.6});
        tl.to(".second-row>span:nth-child(1)", {x:8.6, y:-8.6});
        menuIsOpen = true;
    } else {
        closeMenu();
    }
})
for (let i = 0; i < menuOptions.length; i++) // Closes menu after a link press
    menuOptions[i].addEventListener('click', () => {
        closeMenu();
})
document.querySelector('.arrow-btn').addEventListener('click', () => {
    gsap.set('.arrow-btn>div', {y:0, overwrite: "auto", duration: 0.3});
})
gsap.fromTo('.arrow-btn>div', {y:-10}, {y:10, duration:1, repeat: -1, yoyo: true, ease: 'power0'})

/*
if (windowView) {
    gsap.to("nav", {
    scrollTrigger: "#vibeID", // start the animation when ".box" enters the viewport (once)
    backgroundColor: '#1E1E1E',
    duration: 0.3
    });
} // TODO: Funkar ej
gsap.to("nav", {
    scrollTrigger: "#hero-containerID", // start the animation when ".box" enters the viewport (once)
    backgroundColor: 'transparent',
    duration: 0.3
    });
*/