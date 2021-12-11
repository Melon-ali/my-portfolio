import React from 'react';
import Typewriter from "typewriter-effect";
import { HashLink } from 'react-router-hash-link';
import './Intro.css';

const Intro = () => {
    return (
        <section className="container">
            <div className="intro">
                <div className="intro-text">
                    <p>Hello! I am</p>
                    <h1>Melon Ali</h1>
                    <h3>
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Engineer",
                                    "Web Developer",
                                    "MERN Stack Developer",
                                    "React JS Developer",

                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </h3>
                </div>
                <div className="mt-5">
                    <a href="https://drive.google.com/file/d/1rG4TsGq1Xntt-DCZHhmEzEYnkpUhfsTS/view" target="_blank">
                        <button style={{ width: '150px', height: '50px', fontSize: '18px' }} className="btn btn-success me-3">Get Resume</button>
                    </a>
                    <HashLink smooth to="#about">
                        <button style={{ width: '150px', height: '50px', fontSize: '18px', color: 'white' }} className="btn btn-outline-success">About</button>
                    </HashLink>
                </div>
            </div>
        </section>
    );
};

export default Intro;