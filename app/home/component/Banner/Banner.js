"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import styles from "./banner.module.scss";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function HeroSlider() {
    return (
        <Swiper
            spaceBetween={30}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: (6000 * 2),
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className={styles.swiper}
        >
            {/* SLIDE 1 */}
            <SwiperSlide>
                <div className={styles.slide}>
                    <div className={styles.frame}>
                        <img src="/slider1.webp" alt="Slide 1" />
                        <div className={styles.content}>
                            <h1>Who We Are</h1>
                            <p>
                                We are a technology-driven IT company focused on building reliable,
                                scalable, and modern digital solutions for startups and businesses.
                            </p>
                            <Link href="/about" className={styles.link}>About Us</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
                <div className={styles.slide}>
                    <div className={styles.frame}>
                        <img src="/slider2.webp" alt="Slide 2" />
                        <div className={styles.content}>
                            <h1>What We Do</h1>
                            <p>
                                We design, develop, and deploy high-quality web, mobile, and cloud
                                solutions with a strong focus on performance, security, and scalability.
                            </p>
                            <Link href="/services" className={styles.link}>Our Services</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            {/* SLIDE 3 */}
            <SwiperSlide>
                <div className={styles.slide}>
                    <div className={styles.frame}>
                        <img src="/slider3.webp" alt="Slide 3" />
                        <div className={styles.content}>
                            <h1>Why We Started</h1>
                            <p>
                                Inspired by the challenges startups face, we began our journey to
                                simplify technology, automate operations, and help ideas grow into
                                successful products.
                            </p>
                            <Link href="/case-study" className={styles.link}>Our Journey</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
