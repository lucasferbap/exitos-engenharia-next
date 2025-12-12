"use client";

import Image from "next/image";
import heroImg from "@/assets/capa.avif";
import { FaCog } from "react-icons/fa";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./home.scss";

export default function HeroHome() {
    useScrollAnimation();

    return (
        <section className="hero" id="home">
            <div className="hero__bg">
                <Image
                    src={heroImg}
                    alt="Imagem institucional"
                    fill
                    className="hero__image"
                    priority
                />
            </div>

            <div className="hero__overlay" />

            <div className="hero__particles">
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            <FaCog className="hero__gear gear1" />
            <FaCog className="hero__gear gear2" />

            <div className="hero__shape" />

            <div
                className="hero__content animate-fade-up"
                data-animate
            >
                <h1>
                    Construindo Soluções<br />
                    <span>com Tecnologia e Precisão</span>
                </h1>

                <p>
                    Engenharia moderna, inovação e excelência para impulsionar o seu
                    projeto.
                </p>

                <a href="#servicos" className="hero__cta animate-zoom-in" data-animate>
                    Saiba mais
                </a>
            </div>
        </section>
    );
}
