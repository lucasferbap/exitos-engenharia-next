"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import image from "@/assets/obra-01.png";
import image2 from "@/assets/carousel_em_pe.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./projects.scss";

type ProjectsProps = {
    title?: string;
    autoplay?: boolean;
    autoplayDelay?: number;
};

const images = [
    { src: image, alt: "Imagem de obra 1" },
    { src: image2, alt: "Imagem de obra 2" },
    { src: image, alt: "Imagem de obra 3" },
    { src: image2, alt: "Imagem de obra 4" },
    { src: image, alt: "Imagem de obra 5" },
    { src: image2, alt: "Imagem de obra 6" },
    { src: image, alt: "Imagem de obra 7" },
    { src: image2, alt: "Imagem de obra 8" },
    { src: image, alt: "Imagem de obra 9" },
    { src: image2, alt: "Imagem de obra 10" },
];

const SLIDE_WIDTH = 100; // em %
const SWIPE_THRESHOLD = 15; // em %

export default function Projects({
    title = "Nossos Projetos",
    autoplay = true,
    autoplayDelay = 4000,
}: ProjectsProps) {
    const [current, setCurrent] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const thumbsRef = useRef<HTMLUListElement>(null);
    const trackRef = useRef<HTMLUListElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const startX = useRef(0);
    const prevTranslate = useRef(0);
    const currentTranslate = useRef(0);
    const isDragging = useRef(false);
    const animationID = useRef<number | null>(null);

    useScrollAnimation();

    /* ========= HELPERS ========= */

    const getX = (event: TouchEvent | MouseEvent) =>
        "touches" in event ? event.touches[0].clientX : event.clientX;

    const setSliderPosition = () => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${currentTranslate.current}%)`;
        }
    };

    const animation = () => {
        setSliderPosition();
        if (isDragging.current) {
            animationID.current = requestAnimationFrame(animation);
        }
    };

    /* ========= NAVEGAÇÃO ========= */

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToIndex = (index: number) => {
        setCurrent(index);
    };

    /* ========= DRAG / SWIPE ========= */

    const handleDragStart = (
        e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        const native = "touches" in e ? e.nativeEvent : (e.nativeEvent as MouseEvent);
        startX.current = getX(native);
        isDragging.current = true;
        animationID.current = requestAnimationFrame(animation);
    };

    const handleDragMove = (
        e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        if (!isDragging.current) return;

        const native = "touches" in e ? e.nativeEvent : (e.nativeEvent as MouseEvent);
        const currentX = getX(native);

        const diff = currentX - startX.current;
        const movePercent = (diff / window.innerWidth) * SLIDE_WIDTH;

        currentTranslate.current = prevTranslate.current + movePercent;
    };

    const handleDragEnd = () => {
        if (!isDragging.current) return;

        isDragging.current = false;
        if (animationID.current) cancelAnimationFrame(animationID.current);

        const movedBy = currentTranslate.current - prevTranslate.current;

        if (movedBy < -SWIPE_THRESHOLD && current < images.length - 1) {
            setCurrent((prev) => prev + 1);
        } else if (movedBy > SWIPE_THRESHOLD && current > 0) {
            setCurrent((prev) => prev - 1);
        }

        prevTranslate.current = -current * SLIDE_WIDTH;
        currentTranslate.current = prevTranslate.current;
        setSliderPosition();
    };

    /* ========= AUTOPLAY ========= */

    useEffect(() => {
        if (!autoplay || lightboxOpen || isDragging.current) return;

        const id = window.setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, autoplayDelay);

        return () => clearInterval(id);
    }, [autoplay, autoplayDelay, lightboxOpen]);

    /* ========= SINCRONIZA TRANSFORM COM CURRENT ========= */

    useEffect(() => {
        prevTranslate.current = -current * SLIDE_WIDTH;
        currentTranslate.current = prevTranslate.current;
        setSliderPosition();
    }, [current]);

    /* ========= KEYBOARD ========= */

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxOpen) {
                if (e.key === "ArrowRight") handleNext();
                if (e.key === "ArrowLeft") handlePrev();
                if (e.key === "Escape") closeLightbox();
                return;
            }

            // Fora do lightbox: setas ainda navegam o carousel
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightboxOpen]);

    /* ========= AUTO SCROLL THUMBS ========= */

    useEffect(() => {
        if (!thumbsRef.current) return;

        const container = thumbsRef.current;
        const activeThumb = container.children[current] as HTMLElement | undefined;
        if (!activeThumb) return;

        const containerWidth = container.offsetWidth;
        const thumbWidth = activeThumb.offsetWidth;
        const thumbLeft = activeThumb.offsetLeft;

        const scrollPosition = thumbLeft - containerWidth / 2 + thumbWidth / 2;

        container.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
    }, [current]);

    /* ========= SCROLL LOCK PARA LIGHTBOX ========= */

    useEffect(() => {
        const html = document.documentElement;
        if (lightboxOpen) {
            html.style.overflowY = "hidden";
        } else {
            html.style.overflowY = "";
        }

        return () => {
            html.style.overflowY = "";
        };
    }, [lightboxOpen]);

    /* ========= LIGHTBOX ========= */

    const openLightbox = () => {
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        const section = document.getElementById("projects");
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="projects"
            className="projects hui-container"
            aria-labelledby="projects-heading"
        >
            {/* HEADER PADRONIZADO */}
            <div className="projects__header animate-fade-up" data-animate>
                <span className="projects__tag">Portfólio</span>
                <h2 id="projects-heading">{title}</h2>
                <p className="projects__subtitle">
                    Alguns projetos que mostram na prática a atuação da Exitos em engenharia e
                    tecnologia aplicada.
                </p>
            </div>

            {/* CAROUSEL PRINCIPAL */}
            <div
                className="projects-carousel animate-fade-up"
                data-animate
                aria-roledescription="carrossel"
                aria-label="Galeria de projetos em destaque"
                ref={carouselRef}
            >
                <div className="projects-carousel__buttons">
                    <button
                        className="projects-carousel__button projects-carousel__button--prev"
                        onClick={handlePrev}
                        type="button"
                        aria-label="Projeto anterior"
                    >
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8.61333 0.946641C8.09333 0.426641 7.25333 0.426641 6.73333 0.946641L0.613328 7.06664C0.0933277 7.58664 0.0933277 8.42664 0.613328 8.94664L6.73333 15.0666C7.25333 15.5866 8.09333 15.5866 8.61333 15.0666C9.13333 14.5466 9.13333 13.7066 8.61333 13.1866L3.43999 7.99997L8.61333 2.82664C9.13333 2.30664 9.11999 1.45331 8.61333 0.946641Z" />
                        </svg>
                    </button>

                    <button
                        className="projects-carousel__button projects-carousel__button--next"
                        onClick={handleNext}
                        type="button"
                        aria-label="Próximo projeto"
                    >
                        <svg
                            width="9"
                            height="16"
                            viewBox="0 0 9 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0.386674 0.946676C-0.133326 1.46668 -0.133326 2.30668 0.386674 2.82668L5.56001 8.00001L0.386674 13.1733C-0.133326 13.6933 -0.133326 14.5333 0.386674 15.0533C0.906673 15.5733 1.74667 15.5733 2.26667 15.0533L8.38667 8.93334C8.90667 8.41334 8.90667 7.57334 8.38667 7.05334L2.26667 0.933342C1.76001 0.426675 0.906673 0.426676 0.386674 0.946676Z" />
                        </svg>
                    </button>
                </div>

                <div
                    className="projects-carousel__viewport"
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Projeto ${current + 1} de ${images.length}`}
                >
                    <ul className="projects-carousel__track" ref={trackRef}>
                        {images.map((img, index) => (
                            <li
                                className="projects-carousel__slide"
                                key={index}
                                aria-hidden={index !== current}
                                onClick={openLightbox}
                            >
                                {/* BG BLURRADO */}
                                <Image
                                    src={img.src}
                                    alt=""
                                    fill
                                    className="projects-carousel__image projects-carousel__image--blur"
                                    priority={index === current}
                                />

                                {/* IMAGEM PRINCIPAL */}
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="projects-carousel__image projects-carousel__image--main"
                                    priority={index === current}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* THUMBNAILS */}
                <ul
                    className="projects-carousel__thumbnails"
                    ref={thumbsRef}
                    aria-label="Miniaturas dos projetos"
                >
                    {images.map((img, index) => (
                        <li
                            key={index}
                            className={
                                index === current
                                    ? "projects-carousel__thumbnail projects-carousel__thumbnail--active"
                                    : "projects-carousel__thumbnail"
                            }
                        >
                            <button
                                type="button"
                                className="projects-carousel__thumbnail-inner"
                                onClick={() => goToIndex(index)}
                                aria-label={`Ver projeto ${index + 1}`}
                                aria-current={index === current}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    className="projects-carousel__thumbnail-image"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* LIGHTBOX FULLSCREEN */}
            {lightboxOpen && (
                <div
                    className="projects-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galeria ampliada de projetos"
                >
                    <button
                        className="projects-lightbox__close"
                        onClick={closeLightbox}
                        type="button"
                        aria-label="Fechar galeria de projetos"
                    >
                        ✕
                    </button>

                    <div className="projects-lightbox__buttons">
                        <button
                            className="projects-lightbox__button projects-lightbox__button--prev"
                            onClick={handlePrev}
                            type="button"
                            aria-label="Projeto anterior"
                        >
                            <svg
                                width="9"
                                height="16"
                                viewBox="0 0 9 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.61333 0.946641C8.09333 0.426641 7.25333 0.426641 6.73333 0.946641L0.613328 7.06664C0.0933277 7.58664 0.0933277 8.42664 0.613328 8.94664L6.73333 15.0666C7.25333 15.5866 8.09333 15.5866 8.61333 15.0666C9.13333 14.5466 9.13333 13.7066 8.61333 13.1866L3.43999 7.99997L8.61333 2.82664C9.13333 2.30664 9.11999 1.45331 8.61333 0.946641Z" />
                            </svg>
                        </button>

                        <button
                            className="projects-lightbox__button projects-lightbox__button--next"
                            onClick={handleNext}
                            type="button"
                            aria-label="Próximo projeto"
                        >
                            <svg
                                width="9"
                                height="16"
                                viewBox="0 0 9 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0.386674 0.946676C-0.133326 1.46668 -0.133326 2.30668 0.386674 2.82668L5.56001 8.00001L0.386674 13.1733C-0.133326 13.6933 -0.133326 14.5333 0.386674 15.0533C0.906673 15.5733 1.74667 15.5733 2.26667 15.0533L8.38667 8.93334C8.90667 8.41334 8.90667 7.57334 8.38667 7.05334L2.26667 0.933342C1.76001 0.426675 0.906673 0.426676 0.386674 0.946676Z" />
                            </svg>
                        </button>
                    </div>

                    <div className="projects-lightbox__viewport">
                        <div
                            className="projects-lightbox__track"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <div className="projects-lightbox__slide" key={index}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="projects-lightbox__image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
