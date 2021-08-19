import React from "react";
import styles from './CVmy.module.css'
import useSound from 'use-sound';
import boom from './sound/alarm01.mp3';
// import phone from './sound/iphone.mp3';
import styled, {keyframes} from 'styled-components';
import {
    slideInDown, zoomIn, pulse, tada, zoomInDown,
    slideInLeft, slideInRight, slideInUp
} from 'react-animations';


export const SlideInLeft = styled.div`animation: 1s ${keyframes`${slideInLeft}`}`;
export const SlideInDown = styled.div`animation: 3s backwards 1s ${keyframes`${slideInDown}`}`;
export const Tada = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;
export const Pulse = styled.div`animation: 3s backwards 2s ${keyframes`${pulse}`}`;
export const SlideInUp = styled.div`animation: 1s backwards ${keyframes`${slideInUp}`}`;
export const ZoomInDown = styled.div`animation: 3s backwards 1s ${keyframes`${zoomInDown}`}`;
export const ZoomIn = styled.div`animation: 3s backwards 1s ${keyframes`${zoomIn}`}`;
export const ZoomInC = styled.div`animation: 3s backwards 2s ${keyframes`${zoomIn}`}`;
export const SlideInRight = styled.div`animation: 1s ${keyframes`${slideInRight}`}`;


export const Sound = () => {
    const [play] = useSound(boom);

    return (
        <button style={{background: '#2e2c33'}} onClick={play}>
            🔊
        </button>
    );
};


export function CVmy() {
    const [play, {stop}] = useSound(boom);


    return (
        <div className={styles.wrapper}>
            <SlideInLeft>
                <div className={styles.bottom} onMouseEnter={() => play()} onMouseLeave={() => stop()}>
                    <Sound/>
                </div>
            </SlideInLeft>
            <div className={styles.main}>
                <SlideInDown>
                    <div className={styles.header}>
                        <div className={styles.about}>KHOMENKO <br/> ALEXANDR <br/> VLADIMIROVICH <br/>
                            <hr/>
                            <Tada> FRONTEND DEVELOPER</Tada>
                        </div>
                        <div className={styles.foto}><Pulse>
                            <img className={styles.img} src="myfoto.jpg" alt="myPhoto"/>
                        </Pulse>
                        </div>
                    </div>
                </SlideInDown>
                <SlideInUp>
                    <div className={styles.menu}>
                        <ZoomIn>
                            <div className={styles.category}>
                                <ZoomInDown>
                                    <h2>CONTACTS</h2>
                                    <hr/>
                                    <br/>
                                    <ZoomInC>
                                        <div className={styles.category2}>
                                            <div className={styles.name}>
                                                <div>E-mail:</div>
                                                <div>Phone:</div>
                                                <div>Telegram:</div>
                                                <div>Skype:</div>
                                                <div>GitHub:</div>
                                            </div>
                                            <div className={styles.value}>
                                                <div><a className={styles.refer}
                                                        target="_blank"
                                                        href='mailto:alex988andr@gmail.com'>alex988andr@gmail.com</a>
                                                </div>
                                                <div>+38 (073) 020 12 85</div>
                                                <div><a className={styles.refer} target="_blank"
                                                        href='https://t.me/Ander988'>@Ander988</a></div>
                                                <div>alex7work</div>
                                                <div><a className={styles.refer} target="_blank"
                                                        href='https://github.com/AlexandrKhom'>https://github.com/AlexandrKhom</a>
                                                </div>
                                            </div>
                                        </div>
                                    </ZoomInC>
                                </ZoomInDown>
                            </div>
                        </ZoomIn>
                        <ZoomIn>
                            <div className={styles.category}>
                                <ZoomInDown>
                                    <h2>TECHNICAL SKILLS</h2>
                                    <hr/>
                                    <br/>
                                    <ZoomInC>
                                        <div className={styles.category2}>
                                            <div className={styles.name}>
                                                <div>JavaScript</div>
                                                <div>React(Redux,thunk)</div>
                                                <div>MySQL/MongoDB</div>
                                                <div>Angular/TypeScript</div>
                                                <div>Node.js</div>
                                                {/*<div>GIT, Webpack, Bootstrap,</div>*/}
                                                {/*<div>CSS3, HTML5, Figma</div>*/}
                                            </div>
                                            <div className={styles.value}>
                                                <div>🟣🟣🟣🟣⚫</div>
                                                <div>🟣🟣🟣🟣⚫</div>
                                                <div>🟣🟣🟣⚫⚫</div>
                                                <div>🟣🟣⚫⚫⚫</div>
                                                <div>🟣🟣⚫⚫⚫</div>
                                            </div>
                                        </div>
                                    </ZoomInC>
                                </ZoomInDown>
                            </div>
                        </ZoomIn>
                        <ZoomIn>
                            <div className={styles.category}>
                                <ZoomInDown>
                                    <h2>EDUCATION</h2>
                                    <hr/>
                                    <br/>
                                    <ZoomIn>
                                        <div className={styles.category2}>
                                            <div><b>JavaScript Complex</b>
                                                <p>Okt 2020 - Present</p>
                                                <p>OktenWeb University</p></div>
                                            <div style={{paddingRight: '15px'}}><b>Medical Psychology</b>
                                                <p>Sep 2003 – May 2010</p>
                                                <p>BOGOMOLETS NATIONAL MEDICAL UNIVERSITY</p></div>
                                        </div>
                                    </ZoomIn>
                                </ZoomInDown>
                            </div>
                        </ZoomIn>
                        <ZoomIn>
                            <div className={styles.category}>
                                <ZoomInDown>
                                    <h2>TECHNICAL SKILLS</h2>
                                    <hr/>
                                    <br/>
                                    <ZoomInC>
                                        <div className={styles.category2}>
                                            <div className={styles.name}>
                                                <div>Ukrainian</div>
                                                <div>Russian</div>
                                                <div>English</div>
                                                <div>German</div>
                                            </div>
                                            <div className={styles.value}>
                                                <div>🟣🟣🟣🟣🟣</div>
                                                <div>🟣🟣🟣🟣🟣</div>
                                                <div>🟣🟣⚫⚫⚫</div>
                                                <div>🟣⚫⚫⚫⚫</div>
                                            </div>
                                        </div>
                                    </ZoomInC>
                                </ZoomInDown>
                            </div>
                        </ZoomIn>
                        <ZoomIn>
                            <div className={styles.category}>
                                <ZoomInDown>
                                    <h2>WORK EXPERIENCE</h2>
                                    <hr/>
                                    <br/>
                                    <ZoomInC>
                                        <div style={{lineHeight: 1.3}}>
                                            <b>Head of development department</b>
                                            <p>May 2018 - Sep 2021</p>
                                            <p>"Alfa Global"</p>
                                            <b>Account Manager</b>
                                            <p>Aug 2015 - May 2018</p>
                                            <p>"Hasky outsourcing"</p>
                                        </div>
                                    </ZoomInC>
                                </ZoomInDown>
                            </div>
                        </ZoomIn>
                        <ZoomIn>
                            <div className={styles.category}>
                                <ZoomInDown>
                                    <h2>PET PROJECTS</h2>
                                    <hr/>
                                    <br/>
                                    <ZoomInC>
                                        <div>
                                            <a className={styles.refer}
                                               target="_blank" href="https://alexandrkhom.github.io">
                                                https://alexandrkhom.github.io/movie</a>
                                            <br/>
                                            <br/>
                                            <a className={styles.refer}
                                               target="_blank" href="https://alexkyiv1990.github.io">
                                                https://alexandrkhom.github.io/calculator</a>
                                            <br/>
                                        </div>
                                    </ZoomInC>
                                </ZoomInDown>
                            </div>
                        </ZoomIn>
                    </div>
                </SlideInUp>
            </div>
            <SlideInRight>
                <div className={styles.bottom} onMouseEnter={() => play()} onMouseLeave={() => stop()}>
                    <Sound/>
                </div>
            </SlideInRight>
        </div>
    );
}



