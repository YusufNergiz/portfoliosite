import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { FaEye, FaStar } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb"
import { gsap, ScrollTrigger, Power4 } from "gsap/all";

const GithubRepo = ({name, description, html_url, stargazersCount, watchersCount, forks}) => {

    const repoRef = useRef();

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(repoRef.current, {
                opacity: 0,
                duration: 3,
                ease: Power4.ease,
                stagger: 3,
                y: 100,
                scrollTrigger: {
                    trigger: repoRef.current,
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                    // scroller: "#main-container",
                }
            })
        }, repoRef)

        return () => {
            ctx.revert()
        };
    }, [])

    return (
        <div className={styles.repo} ref={repoRef}>
            <a href={html_url} target="_blank" rel="noreferrer"><h3>{name}</h3></a>
            <p>{description}</p>
            <div className={styles.repoInfo}>
                <div><FaStar />  {stargazersCount}</div>
                <div><FaEye />  {watchersCount}</div>
                <div><TbGitFork />  {forks}</div>
            </div>
        </div>
    );
}

export default GithubRepo;