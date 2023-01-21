import React from 'react'
import gsap, { Power0 } from 'gsap'
import { useEffect } from 'react';
import { Linear } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import IMAGES from '../../../images/Images';


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
			master.to("#" + props.uniqueId, 60, { repeat: -1, x: direction, ease: Linear.easeNone, });
		})
		scrollmm.add(" (min-width: 721px)", () => {
			master.to("#" + props.uniqueId, 60, { repeat: -1, y: direction, ease: Linear.easeNone, });
		})


		var tween = gsap.to(master, { duration: 1.5, timeScale: 1, paused: true });

		ScrollTrigger.create({
			start: 0,
			end: "+=5000",
			onUpdate: self => {
				master.timeScale(5)
				tween.invalidate().restart();
			}
		})




	},);
	return (
		<div className='scroller-container'>
			<div className='scroll-inner-container-slow' id={props.uniqueId} style={{ backgroundColor: "black" }}>
				<div className='scroller scroller1 '>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/1.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/2.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/3.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/4.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/5.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/6.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/7.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/8.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/9.jpg'/>
					</div>
				</div>
				<div className='scroller scroller2 '>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/1.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/2.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/3.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/4.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/5.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/6.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/7.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/8.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/9.jpg'/>
					</div>
				</div>
				<div className='scroller scroller0 '>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/1.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/2.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/3.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/4.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/5.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/6.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/7.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/8.jpg'/>
					</div>
					<div className='scroll-image-container'>
						<img className='scroll-fit' src='../images/reels/events/9.jpg'/>
					</div>
				</div>
			</div>
			{/* <div className='scroll-inner-container-fast' style={{backgroundColor: "orange"}}>
        <div className='scroller scroller1 '>1</div>
        <div className='scroller scroller2 '>2</div>
      </div> */}
		</div>
	)
}
