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
import SpacesTop from "./sections/SpacesTop";
import SpacesBottom from "./sections/SpacesBottom";
import EventsTop from "./sections/EventsTop"
import EventsBottom from "./sections/EventsBottom"
import Contact from "./sections/Contact";
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

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".stage-layer",
				pin: true,
				scrub: 0.1,
				//snap: directionalSnap(1 / (sections.length - 1)),
				end: "+=4000"
				}
		});

		mm.add(" (max-width: 720px)", () =>{
			tl.to(".about", {yPercent: -100})
			tl.to(".spaces-top", {yPercent: -200})
		})

		mm.add(" (min-width: 721px)", () =>{
			tl.to(".about", {xPercent: -100})
			tl.to(".spaces-top", {xPercent: -200})
		})

	});



	return (
		<div className="main-wrapper">
			<div className="stage-layer">
				<section className="section hero">
					<Hero />
				</section>
				<section className="section about">
					<About />
				</section>
				<section className="section spaces-top">
					<SpacesTop />
				</section>
				<section className="section spaces-bottom">
					<SpacesBottom />
				</section>
				<section className="section events-top">
					<EventsTop />
				</section>
				<section className="section events-bottom">
					<EventsBottom />
				</section>
				<section className="section contact">
					<Contact />
				</section>
			</div>
		</div>
	)
}

export default Layout
