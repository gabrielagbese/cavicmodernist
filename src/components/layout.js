/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "./header"
import Nav from "./Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Spaces from "./sections/Spaces";
import Events from "./sections/Events"
import Contact from "./sections/Contact";
import Invisible from "./sections/Invisible";
import "./layout.css"

gsap.registerPlugin(ScrollTrigger)


const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  

  	const [menuActivated, setMenuActivated] = useState(false);

	useEffect(() => {
		let mm = gsap.matchMedia();

		//scroll-trigger
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".stage-layer",
				pin: true,
				snap: "labels",
				scrub: 0.1,
				end: "+=17500",
			}
		});

		//mobile scroll-trigger animation
		mm.add(" (max-width: 720px)", () => {
			tl.to(".hero", { yPercent: -50 })
			tl.to(".about", { yPercent: -115 })
			tl.to(".mob-nav-wrapper",{ yPercent: 0, opacity: 1, duration: 0.01})
			tl.to(".spaces", { yPercent: -67.5 })
			tl.to(".invisible", { xPercent: 1, duration: 0.1 })
			tl.to(".spaces", { yPercent: -137.5 })
			tl.to(".events", { yPercent: -271 })
			tl.to(".invisible", { xPercent: 1, duration: 0.1 })
			tl.to(".events", { yPercent: -325 })
			tl.to(".contact", { yPercent: -740 })


		})
		//desktop scroll-trigger animation
		mm.add(" (min-width: 721px)", () => {
			tl.to(".hero", { xPercent: -50 })
			tl.to(".about", { xPercent: -119 })
			tl.to(".mob-nav", { width: "5vw", duration: 0})
			tl.fromTo(".mob-nav-wrapper", { xPercent: -100, opacity: 0, duration: 0 }, { xPercent: 0, opacity: 1,duration: 0.1 })
			tl.to(".spaces", { xPercent: -213 })
			tl.to(".spaces", { yPercent: -50 })
			tl.to(".events", { xPercent: -313 })
			tl.to(".events", { yPercent: -50 })
			tl.to(".contact", { xPercent: -413 })

		})

	});



	return (
		<div className="main-wrapper">
			<div className="mob-nav-wrapper">
				<nav className="mob-nav">
					<button onClick={activateMenu}>menu</button>
				</nav>
				<div className="mob-nav-content">
				<button onClick={deactivateMenu}>close</button>
				</div>
			</div>
			<div className="stage-outer-layer">
				<div className="menu"><button onClick={activateMenu}>menu</button></div>
				<div className="stage-layer">
					<section className="section-wrapper">
						<Hero />
					</section>
					<section className="section-wrapper">
						<About fn={activateMenu}/>
					</section>
					<section className="section-wrapper">
						<Spaces />
					</section>
					<section className="section-wrapper">
						<Events />
					</section>
					<section className="section-wrapper">
						<Contact />
					</section>
					<section className="invisible">
						<Invisible />
					</section>
				</div>
			</div>
		</div>
	)


	
	
	function activateMenu() {
		let menuTween = gsap.timeline();
		let menuMedia = gsap.matchMedia();
		//"

		menuMedia.add(" (max-width: 720px)", () => {
			menuTween.to(".mob-nav-content", {marginTop:0, duration: 1})
		})
		menuMedia.add(" (min-width: 721px)", () => {
			menuTween.to(".mob-nav-content", {marginLeft:0, duration: 1})
		})
		
		//setMenuActivated(true)
	}
	function deactivateMenu() {
		let menuTween = gsap.timeline()
		let menuMedia = gsap.matchMedia();
		//"

		menuMedia.add(" (max-width: 720px)", () => {
			menuTween.to(".mob-nav-content", {marginTop:"-120vh", duration: 1})
		})
		menuMedia.add(" (min-width: 721px)", () => {
			menuTween.to(".mob-nav-content", {marginLeft:"-120vw", duration: 1})
		})
}
}



export default Layout
