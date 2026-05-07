'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';

import heroImage from '@/assets/hero.png';

import './home.scss';

export default function HeroHome() {

    const { scrollY } = useScroll();

    const imageY = useTransform(
        scrollY,
        [0, 1000],
        [0, 220],
    );

    const contentY = useTransform(
        scrollY,
        [0, 1000],
        [0, 120],
    );

    const opacity = useTransform(
        scrollY,
        [0, 600],
        [1, 0],
    );

    return (
        <section className='hero' id='home'>

            {/* BACKGROUND */}
            <motion.div
                className='heroBackground'
                style={{
                    y: imageY,
                }}
            >

                <Image
                    src={heroImage}
                    alt='Projeto de engenharia civil'
                    fill
                    priority
                    sizes='100vw'
                    className='heroImage'
                />

            </motion.div>

            {/* OVERLAY */}
            <div className='heroOverlay' />

            {/* NOISE */}
            <div className='heroNoise' />

            {/* CONTENT */}
            <motion.div
                className='container heroContainer'
                style={{
                    y: contentY,
                    opacity,
                }}
            >

                <motion.div
                    className='heroContent'
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    {/* EYEBROW */}
                    <span className='heroEyebrow'>
                        Engenharia Civil Premium
                    </span>

                    {/* TITLE */}
                    <h1 className='heroTitle'>

                        <motion.span
                            initial={{
                                opacity: 0,
                                y: 80,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.15,
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            Construindo
                        </motion.span>

                        <motion.span
                            className='heroAccent'
                            initial={{
                                opacity: 0,
                                y: 80,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            estruturas
                            inteligentes
                        </motion.span>

                    </h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        className='heroDescription'
                        initial={{
                            opacity: 0,
                            y: 32,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        Soluções em engenharia civil com foco em
                        precisão técnica, planejamento estratégico
                        e execução de alto padrão para projetos
                        modernos e duradouros.
                    </motion.p>

                    {/* ACTIONS */}
                    <motion.div
                        className='heroActions'
                        initial={{
                            opacity: 0,
                            y: 32,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.7,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <Link
                            href='#servicos'
                            className='buttonPrimary'
                        >
                            Conheça nossos serviços
                        </Link>

                        <Link
                            href='#projetos'
                            className='heroSecondaryButton'
                        >
                            Ver projetos
                        </Link>

                    </motion.div>

                </motion.div>

            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
                className='heroScroll'
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 1.2,
                    duration: 1,
                }}
            >

                <span>Scroll</span>

                <div className='heroScrollLine' />

            </motion.div>

        </section>
    );
}