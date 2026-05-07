'use client';

import Link from 'next/link';
import Image from 'next/image';

import {
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

import logoDesktop from '@/assets/logo_desktop.png';

import './footer.scss';

const navigation = [
    {
        label: 'Início',
        href: '#',
    },

    {
        label: 'Sobre',
        href: '#sobre',
    },

    {
        label: 'Serviços',
        href: '#servicos',
    },

    {
        label: 'Contato',
        href: '#contato',
    },
];

export default function Footer() {
    return (
        <footer className='footer'>

            <div className='container'>

                {/* TOP */}
                <div className='footerTop'>

                    {/* BRAND */}
                    <div className='footerBrand'>

                        <Link
                            href='/'
                            className='footerLogo'
                        >

                            <Image
                                src={logoDesktop}
                                alt='Exitus Engenharia'
                                priority
                            />

                        </Link>

                        <p className='footerDescription'>
                            Soluções em engenharia civil com foco
                            em planejamento técnico, precisão
                            estrutural e execução de alto padrão.
                        </p>

                    </div>

                    {/* NAV */}
                    <div className='footerColumn'>

                        <span className='footerLabel'>
                            Navegação
                        </span>

                        <nav className='footerNav'>

                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </nav>

                    </div>

                    {/* CONTACT */}
                    <div className='footerColumn'>

                        <span className='footerLabel'>
                            Contato
                        </span>

                        <div className='footerInfos'>

                            <a href='mailto:contato@exitusengenharia.com'>
                                contato.exitusengenharia@gmail.com
                            </a>

                            <a href='https://wa.me/552197338-9918'>
                                (21) 9 7338-9918
                            </a>

                            <span>
                                Brasil
                            </span>

                        </div>

                    </div>

                    {/* SOCIAL */}
                    <div className='footerColumn'>

                        <span className='footerLabel'>
                            Social
                        </span>

                        <div className='footerSocials'>

                            <Link href='#'>
                                <FaInstagram />
                            </Link>

                            <Link href='#'>
                                <FaLinkedinIn />
                            </Link>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className='footerBottom'>

                    <div className='footerCopyright'>
                        <span>
                            © 2026 Exitus Engenharia.
                        </span>

                        <span>
                            Todos os direitos reservados.
                        </span>
                    </div>

                    <div className='footerCredits'>

                        <span>
                            Design & desenvolvimento por
                        </span>

                        <a
                            href='https://wa.me/5521995374300'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Lucas Fernandes
                        </a>

                    </div>

                </div>
            </div>

        </footer>
    );
}