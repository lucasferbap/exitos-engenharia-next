"use client";

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Image from "next/image";
import logo from "@/assets/logo.png";

import "./footer.scss";

export default function Footer() {
    useScrollAnimation();

    return (
        <footer className="footer" data-animate>
            <div className="footer__content hui-container">

                {/* COLUNA 1 — LOGO + TEXTO */}
                <div className="footer__col footer__brand" data-animate>
                    <Image
                        src={logo}
                        alt="Exitos Engenharia"
                        width={150}
                        height={60}
                        className="footer__logo"
                    />

                    <p className="footer__text">
                        Soluções inteligentes em engenharia, tecnologia e inovação para transformar
                        ideias em resultados.
                    </p>
                </div>

                {/* COLUNA 2 — LINKS EM 2 COLUNAS */}
                <div className="footer__col" data-animate>
                    <h4 className="footer__title">Navegação</h4>

                    <div className="footer__links-grid">
                        <ul className="footer__links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#sobre">A Exitos</a></li>
                            <li><a href="#servicos">Serviços</a></li>
                        </ul>

                        <ul className="footer__links">
                            <li><a href="#clientes">Clientes</a></li>
                            <li><a href="#projects">Projetos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>

                {/* COLUNA 3 — CONTATO */}
                <div className="footer__col" data-animate>
                    <h4 className="footer__title">Contato</h4>

                    <div className="footer__info">
                        <p><FaEnvelope /> contato@exitos.com</p>
                        <p><FaPhoneAlt /> (21) 99999-9999</p>
                    </div>

                    <div className="footer__social">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* COLUNA 4 — MAPA */}
                <div className="footer__col footer__map" data-animate>
                    <h4 className="footer__title">Localização</h4>

                    <div className="footer__map-wrapper">
                        <iframe
                            src="https://www.google.com/maps?q=-22.9141308,-43.445982&z=15&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            {/* RODAPÉ */}
            <div className="footer__bottom">
                <p>
                    © {new Date().getFullYear()} Exitos Engenharia. Todos os direitos reservados.
                    <span className="footer__dev"> • Desenvolvido por Lucas Fernandes</span>
                </p>
            </div>
        </footer>
    );
}
