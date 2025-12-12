import { useEffect } from "react";

export default function useActiveSection() {
    useEffect(() => {
        const device = window.innerWidth > 768 ? "desktop" : "mobile"
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(`.navbar__menu--${device} .navbar__menu-link`);


        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("id");
                    const link = document.querySelector(`.navbar__menu--${device} .navbar__menu-link[href="#${id}"]`);

                    if (entry.isIntersecting) {
                        navLinks.forEach((l) => l.classList.remove("is-active"));
                        link?.classList.add("is-active");
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
}
