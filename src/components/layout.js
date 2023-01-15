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

	useEffect(() => {
		let mm = gsap.matchMedia();

		//scroll-trigger
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".stage-layer",
				pin: true,
				snap: "labels",
				scrub: 0.1,
				end: "+=20000",
			}
		});

		//mobile scroll-trigger animation
		mm.add(" (max-width: 720px)", () => {
			tl.to(".hero", { yPercent: -50 })
			tl.to(".about", { yPercent: -115 })
			tl.to(".mob-nav", { opacity: 1, duration:0 })
			tl.to(".spaces", { yPercent: -65.775 })
			tl.to(".invisible", { xPercent: 1, duration:0.2 })
			tl.to(".spaces", { yPercent: -137.5 })
			tl.to(".events", { yPercent: -271 })
			tl.to(".invisible", { xPercent: 1, duration:0.2 })
			tl.to(".events", { yPercent: -325 })
			tl.to(".contact", { yPercent: -742 })


		})
		//desktop scroll-trigger animation
		mm.add(" (min-width: 721px)", () => {
			tl.to(".hero", { xPercent: -50 })
			tl.to(".about", { xPercent: -119 })
			tl.to(".desk-nav", { opacity: 1, duration:0.25 })
			tl.to(".spaces", { xPercent: -213 })
			tl.to(".spaces", { yPercent: -50 })
			tl.to(".events", { xPercent: -313 })
			tl.to(".events", { yPercent: -50 })
			tl.to(".contact", { xPercent: -413 })

		})

	});



	return (
		<div className="main-wrapper">
			<nav className="mob-nav"></nav>
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
				<section className="invisible">
					<Invisible />
				</section>
			</div>
		</div>
	)
}

export default Layout
