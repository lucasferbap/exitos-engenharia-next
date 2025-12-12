"use client";

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaChartLine } from "react-icons/fa";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./contact.scss";

export default function Contact() {
    useScrollAnimation();

    return (
        <section id="contato" className="contact hui-container">
            {/* HEADER */}
            <div className="contact__header animate-fade-up" data-animate>
                <span className="contact__tag">Contato</span>

                <h2 className="contact__heading">
                    Vamos iniciar uma parceria de sucesso?
                </h2>

                <p className="contact__description">
                    Entre em contato e descubra como podemos crescer{" "}
                    <span className="contact__nowrap">
                        juntos <FaChartLine size={20} />
                    </span>
                </p>
            </div>

            <div className="contact__content">
                {/* BLOCO DE INFORMAÇÕES */}
                <div className="contact__info animate-fade-left" data-animate>
                    <h3 className="contact__info-title">Informações de Contato</h3>

                    <div className="contact__info-group">
                        <p className="contact__info-item">
                            <FaEnvelope /> contato@exitos.com
                        </p>

                        <p className="contact__info-item">
                            <FaPhoneAlt /> (21) 99999-9999
                        </p>
                    </div>

                    <div className="contact__info-divider" />

                    <div className="contact__info-group">
                        <a
                            href="https://instagram.com"
                            className="contact__info-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram /> Instagram
                        </a>

                        <a
                            href="https://linkedin.com"
                            className="contact__info-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* FORMULÁRIO */}
                <form className="contact__form animate-fade-right" data-animate>
                    <label>
                        Nome
                        <input type="text" placeholder="Seu nome" required />
                    </label>

                    <label>
                        E-mail
                        <input type="email" placeholder="seuemail@exemplo.com" required />
                    </label>

                    <label>
                        Mensagem
                        <textarea placeholder="Escreva sua mensagem..." required />
                    </label>

                    <button type="submit" className="contact__submit">
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}
