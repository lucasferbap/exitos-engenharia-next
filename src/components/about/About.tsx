"use client";

import Image from "next/image";
import aboutImg from "@/assets/about-hero.png";
import {
    FaTools,
    FaCheckCircle,
    FaClock,
    FaUsers,
    FaBullseye,
    FaEye,
    FaHandshake,
} from "react-icons/fa";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./about.scss";

export default function AboutSection() {
    useScrollAnimation();

    return (
        <section className="about hui-container" id="about">
            <div className="aboutHero">
                <div
                    className="aboutHero__content animate-fade-up"
                    data-animate
                >
                    <span className="aboutHero__tag">Sobre nós</span>
                    <h1>Sobre a Exitos</h1>
                    <p>
                        Engenharia, inovação e excelência em cada projeto. Atuamos com foco
                        em resultado, tecnologia e soluções sob medida.
                    </p>
                </div>

                <div
                    className="aboutHero__imgWrapper animate-fade-right"
                    data-animate
                >
                    <div className="aboutHero__overlay" />
                    <Image
                        src={aboutImg}
                        alt="Sobre a Exitos"
                        className="aboutHero__bg"
                        priority
                    />
                </div>
            </div>

            <div className="diferenciais animate-fade-up" data-animate>
                <h2>Nossos Diferenciais</h2>

                <div className="diferenciais__grid">
                    <div className="diferenciais__item">
                        <FaTools />
                        <p>Equipe especializada e altamente treinada.</p>
                    </div>

                    <div className="diferenciais__item">
                        <FaCheckCircle />
                        <p>Compromisso com qualidade e conformidade técnica.</p>
                    </div>

                    <div className="diferenciais__item">
                        <FaClock />
                        <p>Entrega eficiente com prazos bem administrados.</p>
                    </div>

                    <div className="diferenciais__item">
                        <FaUsers />
                        <p>Relacionamento transparente e focado no cliente.</p>
                    </div>
                </div>
            </div>

            {/* HISTÓRIA */}
            <div className="history animate-fade-up" data-animate>
                <div className="history__container">
                    <h2>Nossa História</h2>

                    <p>
                        A Exitos nasceu com o propósito de entregar soluções completas em
                        engenharia, infraestrutura e serviços especializados. Ao longo dos
                        anos, expandimos nossa atuação combinando tecnologia, precisão e
                        compromisso com resultados de impacto.
                    </p>

                    <p>
                        Nossa trajetória é construída com ética, qualidade e foco em
                        entregar sempre mais do que o esperado — transformando projetos em
                        realidade e gerando valor para clientes, parceiros e comunidades.
                    </p>
                </div>
            </div>

            {/* PRINCÍPIOS */}
            <div className="principles animate-fade-up" data-animate>
                <h2 className="principles__title">Quem Somos</h2>

                <div className="principles__grid">
                    <div className="principles__item">
                        <FaBullseye className="principles__icon" />
                        <h3>Missão</h3>
                        <p>
                            Entregar soluções de engenharia com excelência, segurança e
                            eficiência.
                        </p>
                    </div>

                    <div className="principles__item">
                        <FaEye className="principles__icon" />
                        <h3>Visão</h3>
                        <p>
                            Ser referência nacional em infraestrutura e serviços
                            especializados.
                        </p>
                    </div>

                    <div className="principles__item">
                        <FaHandshake className="principles__icon" />
                        <h3>Valores</h3>
                        <p>
                            Ética, inovação, responsabilidade social e foco no cliente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
