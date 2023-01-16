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
		let direction = props.direction;
		console.log(direction)

		let master = gsap.timeline();
		scrollmm.add(" (max-width: 720px)", () => {
			master.to("#" + props.uniqueId, 17.5, { repeat: -1, x: direction, ease: Linear.easeNone, });
		})
		scrollmm.add(" (min-width: 721px)", () => {
			master.to("#" + props.uniqueId, 17.5, { repeat: -1, y: direction, ease: Linear.easeNone, });
		})


		var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });

		ScrollTrigger.create({
			start: 0,
			end: "+=5000",
			onUpdate: self => {
				master.timeScale(9)
				tween.invalidate().restart();
			}
		})




	},);
	return (
		<div className='scroller-container'>
			<div className='scroll-inner-container-slow' id={props.uniqueId} style={{ backgroundColor: "orange" }}>
				<div className='scroller scroller1 '><p>{props.direction} 1</p></div>
				<div className='scroller scroller2 '><p>{props.direction} 2</p></div>
				<div className='scroller scroller0 '><p>{props.direction} 0</p></div>
			</div>
			{/* <div className='scroll-inner-container-fast' style={{backgroundColor: "orange"}}>
        <div className='scroller scroller1 '>1</div>
        <div className='scroller scroller2 '>2</div>
      </div> */}
		</div>
	)
}
