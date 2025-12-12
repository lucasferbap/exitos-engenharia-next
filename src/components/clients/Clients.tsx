"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import logo from "@/assets/logo_prefeitura.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./clients.scss";

const clients = [
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
    { name: "Prefeitura de Guapimirim", logo },
];

const speed = 30;

export default function ClientsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    useScrollAnimation();

    const fullList = [...clients, ...clients];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animation: number;

        const move = () => {
            track.scrollLeft += 1;

            if (track.scrollLeft >= track.scrollWidth / 2) {
                track.scrollLeft = 0;
            }

            animation = window.setTimeout(move, speed);
        };

        move();
        return () => clearTimeout(animation);
    }, []);

    return (
        <section className="clientes" id="clientes">
            <div className="clientes__header hui-container animate-fade-up" data-animate>
                <span className="clientes__tag">Parcerias</span>
                <h2>Nossos Clientes</h2>
                <p>Empresas e instituições que confiam na Exitos.</p>
            </div>

            <div className="clientes__carousel" ref={trackRef}>
                <ul className="clientes__track" aria-label="Lista de clientes parceiros">
                    {fullList.map((client, index) => (
                        <li className="clientes__logoItem" key={index}>
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={160}
                                height={80}
                                className="clientes__logo"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
