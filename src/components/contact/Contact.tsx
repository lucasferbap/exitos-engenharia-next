'use client';

import { motion } from 'framer-motion';

import './contact.scss';

const easing = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
    return (
        <section className='contact section' id='contato'>

            <div className='container'>

                <div className='contactGrid'>

                    {/* LEFT */}
                    <motion.div
                        className='contactLeft'
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 1,
                            ease: easing,
                        }}
                    >

                        <span className='contactLabel'>
                            Contato
                        </span>

                        <h2 className='contactTitle'>
                            Vamos construir
                            <span>
                                seu próximo
                                projeto.
                            </span>
                        </h2>

                        <p className='contactDescription'>
                            Entre em contato com nossa equipe
                            para desenvolver soluções técnicas
                            inteligentes e alinhadas às necessidades
                            do seu projeto.
                        </p>

                        <div className='contactInfos'>

                            <div className='contactInfo'>
                                <span>E-mail</span>

                                <strong>
                                    contato.exitusengenharia@gmail.com
                                </strong>
                            </div>

                            <div className='contactInfo'>
                                <span>Telefone</span>

                                <strong>
                                    (21) 9 7338-9918
                                </strong>
                            </div>

                            <div className='contactInfo'>
                                <span>Localização</span>

                                <strong>
                                    Brasil
                                </strong>
                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        className='contactRight'
                        initial={{
                            opacity: 0,
                            y: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.15,
                            ease: easing,
                        }}
                    >

                        {/* WHATSAPP */}
                        <div className='contactWhatsapp'>

                            <a
                                href='https://wa.me/5521973389918'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='whatsappCard'
                            >

                                <span className='whatsappLabel'>
                                    WhatsApp
                                </span>

                                <div className='whatsappContent'>

                                    <h3>
                                        Converse diretamente
                                        com nossa equipe.
                                    </h3>

                                    <p>
                                        Atendimento rápido para
                                        orçamentos, dúvidas e
                                        alinhamento técnico.
                                    </p>

                                </div>

                                <div className='whatsappButton'>
                                    Iniciar conversa
                                </div>

                            </a>

                        </div>

                        {/* FORM + EMAIL */}
                        <div className='contactFormWrapper'>

                            {/* EMAIL */}
                            <div className='contactEmail'>

                                <div className='contactEmailTop'>

                                    <span>
                                        Contato por e-mail
                                    </span>

                                    <p>
                                        Envie uma mensagem para nossa equipe
                                        e responderemos o mais breve possível.
                                    </p>

                                </div>

                            </div>

                            {/* FORM */}
                            <form className='contactForm'>

                                <div className='formGroup'>
                                    <input
                                        type='text'
                                        placeholder='Seu nome'
                                    />
                                </div>

                                <div className='formGroup'>
                                    <input
                                        type='email'
                                        placeholder='Seu e-mail'
                                    />
                                </div>

                                <div className='formGroup'>
                                    <textarea
                                        placeholder='Fale sobre seu projeto'
                                        rows={5}
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='buttonPrimary'
                                >
                                    Enviar mensagem
                                </button>

                            </form>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}