/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Header from "./header"
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

	useEffect(() => {
		let mm = gsap.matchMedia();

		//scroll-trigger
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".stage-layer",
				pin: true,
				scrub: 0.1,
				end: "+=15000"
				}
		});

		//mobile scroll-trigger animation
		mm.add(" (max-width: 720px)", () =>{
			tl.to(".about", {yPercent: -100})
			tl.to(".spaces", {yPercent: -200})
			tl.to(".events", {yPercent: -300})

		})
		//desktop scroll-trigger animation
		mm.add(" (min-width: 721px)", () =>{
			tl.to(".about", {xPercent: -100})
			tl.to(".spaces", {xPercent: -200})
			tl.to(".spaces", {yPercent: -50})
			tl.to(".events", {xPercent: -300})
			tl.to(".events", {yPercent: -50})
			tl.to(".contact", {xPercent: -400})
			tl.to(".invisible", {xPercent: -420})
			
		})

	});



	return (
		<div className="main-wrapper">
			<div className="stage-layer">
				<section className="section-wrapper">
					<Hero />
				</section>
				<section className="section-wrapper">
					<About />
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
				{/* <section className="invisible">
					<Invisible />
				</section> */}
			</div>
		</div>
	)
}

export default Layout
