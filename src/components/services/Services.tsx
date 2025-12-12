"use client";

import { useState } from "react";
import Image from "next/image";
import servicosImg from "@/assets/servicos.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./services.scss";

const services = [
  {
    title: "Engenharia Elétrica",
    subtitle: "Sistemas e instalações",
    description:
      "Projetos elétricos completos, laudos técnicos, SPDA, automação, eficiência energética e adequação às normas.",
    image: servicosImg,
  },
  {
    title: "Engenharia Civil",
    subtitle: "Obras e estruturas",
    description:
      "Execução, gerenciamento de obras, reformas, laudos estruturais e regularizações técnicas.",
    image: servicosImg,
  },
  {
    title: "Automação Industrial",
    subtitle: "Processos inteligentes",
    description:
      "Integração de sistemas, CLPs, sensores, supervisórios e controle de processos industriais.",
    image: servicosImg,
  },
  {
    title: "Manutenção Técnica",
    subtitle: "Preventiva e corretiva",
    description:
      "Planos de manutenção, inspeções, relatórios técnicos e suporte especializado contínuo.",
    image: servicosImg,
  },
];

export default function ServicesSection() {
  const [mobileIndex, setMobileIndex] = useState<number | null>(null);

  useScrollAnimation();

  function openCard(index: number) {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 900;

    if (isMobile) {
      setMobileIndex(index);
    }
    // 👉 no desktop não faz nada no clique, só hover cuida do flip
  }

  function closeMobile() {
    setMobileIndex(null);
  }

  return (
    <section className="servicos hui-container" id="servicos">
      <div className="servicos__header animate-fade-up" data-animate>
        <span className="servicos__tag">Serviços</span>
        <h2>Nossos Serviços</h2>
        <p>Soluções completas em engenharia, inovação e tecnologia.</p>
      </div>

      <div className="servicos__grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="servicos__card animate-fade-up"
            data-animate
            onClick={() => openCard(index)}
          >
            <div className="servicos__cardInner">
              {/* Frente */}
              <div className="servicos__cardFront">
                <h3>{service.title}</h3>
                <span>{service.subtitle}</span>
                <small className="servicos__hint">Toque para ver</small>
              </div>

              {/* Verso */}
              <div className="servicos__cardBack">
                <p>{service.description}</p>
                <a href="#contato" className="servicos__cta">
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mobileIndex !== null && (
        <div className="servicos__modal hui-container">
          <button className="servicos__close" onClick={closeMobile}>
            ✕
          </button>

          <div className="servicos__modalContent">
            <h3>{services[mobileIndex].title}</h3>

            <Image
              src={services[mobileIndex].image}
              alt={services[mobileIndex].title}
              width={800}
              height={500}
            />

            <p>{services[mobileIndex].description}</p>

            <a
              href="#contato"
              className="servicos__cta servicos__cta--full"
              onClick={closeMobile}
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
