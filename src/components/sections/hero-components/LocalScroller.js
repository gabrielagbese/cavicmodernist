import React from 'react'
import gsap, { Power0 } from 'gsap'
import { useEffect } from 'react';
import { Linear } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function LocalScroller(props) {

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		let scroller = document.querySelectorAll(".scroller")
		let scrollmm = gsap.matchMedia();

		let scrollTl1 = gsap.timeline();
		let scrollTl2 = gsap.timeline();
		var rate = 20;

		let master = gsap.timeline();
		scrollmm.add(" (max-width: 720px)", () =>{
			master.to(".scroll-inner-container-slow", 20, {repeat: -1,x: '-' + "50%",ease: Linear.easeNone,});
		})
		scrollmm.add(" (min-width: 721px)", () =>{
			master.to(".scroll-inner-container-slow", 20, {repeat: -1,y: '-' + "50%",ease: Linear.easeNone,});
		})
		

		var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });
		var timeScaleClamp = gsap.utils.clamp(1, 6);

		ScrollTrigger.create({
			start: 0,
			end: "+=1000",
			onUpdate: self => {
				master.timeScale(9)
				tween.invalidate().restart();
			}
		})




	},);
	return (
		<div className='scroller-container'>
			<div className='scroll-inner-container-slow' style={{ backgroundColor: "orange" }}>
				<div className='scroller scroller1 '>1</div>
				<div className='scroller scroller2 '>2</div>
			</div>
			{/* <div className='scroll-inner-container-fast' style={{backgroundColor: "orange"}}>
        <div className='scroller scroller1 '>1</div>
        <div className='scroller scroller2 '>2</div>
      </div> */}
		</div>
	)
}
