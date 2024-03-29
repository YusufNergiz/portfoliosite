import React, { useLayoutEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";
import { gsap, ScrollTrigger, Power4 } from "gsap/all";
import { useRef } from "react";
import GithubStats from "./GithubStats";
import Slider from "react-slick";

import innLab from "../../images/innLab-mainPage.PNG"
import alemMed from "../../images/alemmed-mainPage.PNG";
import mazmun from "../../images/mazmun-mainPage.png";
import mugalim from "../../images/mugalim-mainPage.PNG";
import ytbClone from "../../images/ytbClone.PNG";
import Footer from "../../components/Footer";
import MouseBlob from "../../components/MouseBlob";

const Projects = () => {

    // useLocoScroll();

    const mainRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
    };

    const projectList = [
        {
            description: "Built the clone of the Landing page which helped me dive deeper into CSS and HTML",
            url: "https://innlab.kz/page",
            image: innLab,
            title: "Software Company Landing Page",
            stack: ["Angular", "Bootstrap", "HTML", "CSS"]
        },
        {
            description: "Built a University News Site both Front-End and Back-End with admin page",
            url: "https://alemmedicus.kz/main",
            image: alemMed,
            title: "Medical University Scholaship Site",
            stack: ["Angular", "Firebase", "Bootstrap", "HTML", "CSS"]
        },
        {
            description: "Built a Clone of an Online BookStore based in Kazakhstan both Front-End and Back-End with authentication using Fireabase",
            url: "https://github.com/YusufNergiz/Mazmun",
            image: mazmun,
            title: "Online Bookstore",
            stack: ["Angular", "Firebase", "Bootstrap", "HTML", "CSS"]
        },
        {
            description: "Built the Clone of an Academy's Landing Page",
            url: "https://mugalim.academy/",
            image: mugalim,
            title: "Education Center Landing Page",
            stack: ["Angular", "Bootstrap", "HTML", "CSS"]
        },
        {
            description: "Built a Youtube Clone using a non SQL Back-End, MongoDB",
            url: "https://github.com/YusufNergiz/YoutubeClone",
            image: ytbClone,
            title: "Youtube Clone",
            stack: ["React", "Firebase", "Node.js", "Express", "MongoDB", "Bootstrap", "HTML", "CSS"]
        },
    ]

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from("#curtain", {
                y: 0,
                duration: 5,
                stagger: 3,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "center center",
                    end: "+=50%",
                    // scroller: "#main-container",
                    scrub: true
                }
            })

            gsap.from("#header", {
                opacity: 1,
                duration: 5,
                ease: Power4.ease,
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "center center",
                    end: "+=50%",
                    // scroller: "#main-container",
                    scrub: 1
                }
            })

        }, mainRef)   

        return () => {
            ctx.revert()
        };

    }, [])

    return (
        <>
            <div>
                <MouseBlob />
                <div style={{overflow: "hidden"}}>
                    <div className="position-realtive vh-100 w-100" ref={mainRef}>
                        <div id="header" style={{opacity: 0, height: "100vh"}}>
                            <Navbar />
                            <Header headerText={"My projects"}/>
                        </div>
                        <div className="d-flex" style={{background: "#212121"}}>
                            <div className={styles.curtain} id="curtain"></div>
                            <div className={styles.curtain} id="curtain"></div>
                            <div className={styles.curtain} id="curtain"></div>
                            <div className={styles.curtain} id="curtain"></div>
                            <div className={styles.curtain} id="curtain"></div>
                        </div>
                    </div>
                </div>
                <GithubStats/>
                <div style={{width: "100%", height: "100vh", overflow: "hidden"}}>
                    <Slider { ...settings }>
                        {projectList.map((project, index) => (
                            <div className={styles.projectContainer} key={index}>
                                <a href={project.url} target="_blank" rel="noreferrer"><h1>{project.title}</h1></a>
                                <div className={styles.projectWrapper}>
                                    <img src={project.image} alt="Project" className={styles.projectImage}/>
                                    <p className="mt-3">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Projects;