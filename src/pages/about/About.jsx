import React, { useLayoutEffect } from "react";
import styles from "./styles.module.css";
import { gsap, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import AboutMeText from "../../components/AboutMeText";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MouseBlob from "../../components/MouseBlob";

const About = () => {

        // useLocoScroll();

        const mainRef = useRef();
        const curtainTopRef = useRef();
        const curtainBottomRef = useRef();

        useLayoutEffect(() => {

            gsap.registerPlugin(ScrollTrigger);
            
            const ctx = gsap.context(() => {
                gsap.fromTo(curtainTopRef.current, {
                    y: "-50vh"
                    }, {
                        y: "50vh",
                        ease: 'none',
                        scrollTrigger: {
                        trigger : mainRef.current,
                        start: 0,
                        end: '+=50%',
                        scrub: true,
                        // scroller: "#main-container",
                        lazy: false 
                    }
                })
    
                gsap.fromTo(curtainBottomRef.current, {
                    y: "50vh"
                },
                {
                    y: 0,
                    ease: 'none',
                    scrollTrigger: {
                    trigger : mainRef.current,
                    start: 0,
                    end: '+=50%',
                    scrub: true,
                    // scroller: "#main-container",
                    lazy: false  
                    }
                })
    
                gsap.to(mainRef.current, {
                    opacity: 0,
                    zIndex: -1,
                    ease: 'none',
                    scrollTrigger: {
                    trigger : mainRef.current,
                    start: 0,
                    end: '+=50%',
                    scrub: true,
                    // scroller: "#main-container",
                    lazy: false  
                }
                })
            })
            return () => {
                ctx.revert()
            };
        }, [])


        return (
            <>
                <div>
                    <MouseBlob />
                    <div style={{position: "relative", overflow: "hidden"}}>
                        <div className={styles.curtainTop} id="curtainTop" ref={curtainTopRef}></div>
                        <div className={styles.curtainBottom} id="curtainBottom" ref={curtainBottomRef}></div> 
                        <div className={styles.pageTransitionBlack} ref={mainRef} id="main">
                            <Navbar />
                            <Header headerText={"About Me"}/>
                        </div>
                    </div>
                    <AboutMeText />
                    <Skills />
                    <Experience />
                    <Footer />
                </div>
            </>
        );
    }

    export default About;