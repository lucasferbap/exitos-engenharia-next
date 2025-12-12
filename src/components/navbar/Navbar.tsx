"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import useActiveSection from "@/hooks/useActiveSection";
import "./navbar.scss";

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useActiveSection();

  const menuItens = [
    { name: "Home", path: "#home", id: 1 },
    { name: "A Exitos", path: "#about", id: 2 },
    { name: "Serviços", path: "#servicos", id: 3 },
    { name: "Clientes", path: "#clientes", id: 4 },
    { name: "Projetos", path: "#projects", id: 5 },
    { name: "Contato", path: "#contato", id: 6 },
  ];

  const toggleMenu = () => {
    const btn = document.getElementById("menuBtn");
    const menu = document.querySelector(".navbar__mobile");
    const overlay = document.querySelector(".navbar__overlay");
    const html = document.querySelector("html");

    if (btn && menu && overlay && html) {
      html.classList.toggle("overflow-hidden");
      btn.classList.toggle("navbar__toggle--open");
      menu.classList.toggle("navbar__mobile--open");
      overlay.classList.toggle("navbar__overlay--active");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setTimeout(() => setScrollDirection("down"), 500);
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrollDirection === "down" ? "navbar--hidden" : ""}`}>
        {/* LOGO */}
        <div className="navbar__logo">
          <a href="#home" className="navbar__logo-link">
            <Image
              src={logo}
              width={120}
              height={40}
              alt="Logo"
              priority
              className="navbar__logo-image"
            />
          </a>
        </div>

        {/* MENU DESKTOP */}
        <ul className="navbar__menu navbar__menu--desktop">
          {menuItens.map((item) => (
            <li key={item.id} className="navbar__menu-item">
              <a
                href={item.path}
                className="navbar__menu-link"
                onClick={(event) => handleNavClick(event, item.path)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          className="navbar__toggle"
          id="menuBtn"
          aria-label="Abrir menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU MOBILE */}
        <div className="navbar__mobile">
          <ul className="navbar__mobile-list">
            {menuItens.map((item) => (
              <li key={item.id} className="navbar__menu-item">
                <a
                  href={item.path}
                  className="navbar__menu-link"
                  onClick={(event) => {
                    handleNavClick(event, item.path);
                    toggleMenu();
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__mobile-footer">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div className="navbar__overlay" onClick={toggleMenu}></div>
    </>
  );
}
