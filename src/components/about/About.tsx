'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import aboutImage from '@/assets/about-hero.png';

import './about.scss';

const easing = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.9,
            ease: easing,
        },
    },
};

const stagger = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function About() {
    return (
        <section className='about section' id='sobre'>

            <div className='container'>

                {/* TOP */}
                <motion.div
                    className='aboutTop'
                    variants={stagger}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    <motion.div
                        className='aboutLabel'
                        variants={fadeUp}
                    >
                        Sobre a Exitus
                    </motion.div>

                    <motion.div
                        className='aboutHeadlineWrapper'
                        variants={fadeUp}
                    >
                        <h2 className='aboutHeadline'>
                            Engenharia com
                            <span>
                                precisão,
                                estratégia
                                e execução.
                            </span>
                        </h2>
                    </motion.div>

                </motion.div>

                {/* CONTENT */}
                <div className='aboutContent'>

                    {/* LEFT */}
                    <motion.div
                        className='aboutText'
                        variants={stagger}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                    >

                        <motion.p variants={fadeUp}>
                            A Exitus Engenharia atua no desenvolvimento
                            de projetos e execuções de engenharia civil
                            com foco em qualidade construtiva, inovação
                            e excelência operacional.
                        </motion.p>

                        <motion.p variants={fadeUp}>
                            Nossa atuação combina planejamento técnico,
                            inteligência estrutural e acompanhamento
                            rigoroso para entregar soluções modernas,
                            eficientes e duradouras.
                        </motion.p>

                        <motion.div
                            className='aboutNumbers'
                            variants={fadeUp}
                        >

                            <div className='aboutNumberItem'>
                                <strong>+12</strong>
                                <span>Anos de experiência</span>
                            </div>

                            <div className='aboutNumberItem'>
                                <strong>+80</strong>
                                <span>Projetos entregues</span>
                            </div>

                            <div className='aboutNumberItem'>
                                <strong>100%</strong>
                                <span>Compromisso técnico</span>
                            </div>

                        </motion.div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        className='aboutVisual'
                        initial={{
                            opacity: 0,
                            scale: 1.04,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: easing,
                        }}
                    >

                        <div className='aboutImageWrapper'>
                            <Image
                                src={aboutImage}
                                alt='Projeto Exitus Engenharia'
                                fill
                                className='aboutImage'
                            />
                        </div>

                        <motion.div
                            className='aboutFloatingCard'
                            initial={{
                                opacity: 0,
                                y: 32,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.25,
                                duration: 0.8,
                                ease: easing,
                            }}
                        >

                            <span className='aboutFloatingLabel'>
                                Exitus Engenharia
                            </span>

                            <strong>
                                Construindo soluções
                                inteligentes para
                                projetos modernos.
                            </strong>

                        </motion.div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}