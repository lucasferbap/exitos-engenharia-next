'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { IoClose } from 'react-icons/io5';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logoDesktop from '@/assets/logo_desktop.png';
import logoMobile from '@/assets/logo_mobile.png';

import './navbar.scss';

const menuItems = [
  { label: 'Início', href: '#' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
];

const easing = [0.77, 0, 0.175, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'headerScrolled' : ''}`}>

        <div className='container headerInner'>

          {/* LOGO */}
          <Link href='/' className='logoWrapper'>

            <Image
              src={logoDesktop}
              alt='Logo Exitus Engenharia'
              className='logoDesktop'
              priority
            />

            <Image
              src={logoMobile}
              alt='Logo Exitus Engenharia'
              className='logoMobile'
              width={220}
              height={60}
              priority
            />

          </Link>

          {/* RIGHT */}
          <div className='headerRight'>

            {/* DESKTOP NAV */}
            <nav className='desktopNav'>
              <ul>

                {menuItems.map((item) => (
                  <li key={item.label}>

                    <Link href={item.href}>
                      {item.label}
                    </Link>

                  </li>
                ))}

              </ul>
            </nav>

            {/* CTA */}
            <Link
              href='#contato'
              className='headerCta'
            >
              Solicitar orçamento
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className='menuButton'
              onClick={() => setIsOpen(true)}
              aria-label='Abrir menu'
            >
              <span />
              <span />
            </button>

          </div>

        </div>

      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              className='overlay'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
            />

            {/* MOBILE MENU */}
            <motion.aside
              className='mobileMenu'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.7,
                ease: easing,
              }}
            >

              {/* TOP */}
              <div className='mobileMenuTop'>

                <Image
                  src={logoMobile}
                  alt='Logo Exitus Engenharia'
                  width={160}
                  height={50}
                />

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label='Fechar menu'
                >
                  <IoClose />
                </button>

              </div>

              {/* NAV */}
              <nav className='mobileNav'>
                <ul>

                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      transition={{
                        delay: 0.08 * index,
                        duration: 0.6,
                        ease: easing,
                      }}
                    >

                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>

                    </motion.li>
                  ))}

                </ul>
              </nav>

              {/* FOOTER */}
              <motion.div
                className='mobileFooter'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                }}
              >

                <Link
                  href='#contato'
                  className='mobileCta'
                  onClick={() => setIsOpen(false)}
                >
                  Solicitar orçamento
                </Link>

                <div className='socials'>

                  <Link href='#'>
                    <FaInstagram />
                  </Link>

                  <Link href='#'>
                    <FaLinkedinIn />
                  </Link>

                </div>

              </motion.div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}