import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

export default function Scroller() {

    useEffect(() => {
        let mm = gsap.matchMedia();

        const item01 = document.querySelector('.box01 .item');
        const item02 = document.querySelector('.box02 .item');
        const item03 = document.querySelector('.box03 .item');

        for (let i = 0; i <= 3; i++) {
            const clone01 = item01.cloneNode(true);
            const clone02 = item02.cloneNode(true);
            const clone03 = item03.cloneNode(true);
            document.querySelector('.left').appendChild(clone01);
            document.querySelector('.middle').appendChild(clone02);
            document.querySelector('.right').appendChild(clone03);
        }

        mm.add(" (max-width: 720px)", () => {
            const itemWidth = document.querySelector('.item').clientWidth;

            gsap.set(".left", {
                marginLeft: -itemWidth,
            });
            gsap.set(".middle", {
                marginLeft: -itemWidth,
            });
            gsap.set(".right", {
                marginLeft: -itemWidth,
            });
    
            let mod = gsap.utils.wrap(0, itemWidth);
            let dirFromLeft = "+=" + itemWidth;
            let dirFromRight = "-=" + itemWidth;
    
            function marquee(which, time, direction) {
                return gsap.to(which, {
                    duration: time,
                    ease: "none",
                    x: direction,
                    modifiers: {
                        x: x => mod(parseFloat(x)) + "px"
                    },
                    repeat: -1,
                })
            }
    
            var velocity = 1;
    
            var master = gsap.timeline()
                .add(marquee(".left", 60 * velocity, dirFromLeft), 0)
                .add(marquee(".middle", 70 * velocity, dirFromRight), 0)
                .add(marquee(".right", 62.5 * velocity, dirFromLeft), 0)
    
            var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });
            var timeScaleClamp = gsap.utils.clamp(1, 4);
    
            ScrollTrigger.create({
                start: 0,
                end: "+=1000",
                onUpdate: self => {
                    master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 2)));
                    tween.invalidate().restart();
                }
            })
        })


        mm.add(" (min-width: 721px)", () => {
            const itemHeight = document.querySelector('.item').clientHeight;

            gsap.set(".left", {
                marginTop: -itemHeight,
            });
            gsap.set(".middle", {
                marginTop: -itemHeight,
            });
            gsap.set(".right", {
                marginTop: -itemHeight,
            });
    
            let mod = gsap.utils.wrap(0, itemHeight);
            let dirFromTop = "+=" + itemHeight;
            let dirFromBottom = "-=" + itemHeight;
    
            function marquee(which, time, direction) {
                return gsap.to(which, {
                    duration: time,
                    ease: "none",
                    y: direction,
                    modifiers: {
                        y: y => mod(parseFloat(y)) + "px"
                    },
                    repeat: -1,
                })
            }
    
            var velocity = 1;
    
            var master = gsap.timeline()
                .add(marquee(".left", 60 * velocity, dirFromTop), 0)
                .add(marquee(".middle", 70 * velocity, dirFromBottom), 0)
                .add(marquee(".right", 62.5 * velocity, dirFromTop), 0)
    
            var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });
            var timeScaleClamp = gsap.utils.clamp(1, 9);
    
            ScrollTrigger.create({
                start: 0,
                end: "+=1000",
                onUpdate: self => {
                    master.timeScale(timeScaleClamp(Math.abs(self.getVelocity() / 2)));
                    tween.invalidate().restart();
                }
            })
        })


        

       

    },);

    return (
        <div>
            <div class="custom-card card1">
					<div class="box box01 left" style={{}}>
							<div class="item">
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
							</div>
						</div>
						<div class="box box02 middle">
							<div class="item">
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								
							</div>
						</div>
						<div class="box box03 right" style={{}}>
							<div class="item">
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
								<div class="item_child"></div>
							</div>
						</div>
					</div>
        </div>
    )
}
