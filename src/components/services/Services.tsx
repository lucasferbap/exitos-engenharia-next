'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import './services.scss';

const services = [
  {
    number: '01',
    title: 'Engenharia & Gestão',
    description:
      'Planejamento, gerenciamento e supervisão técnica para obras e projetos de engenharia de alta complexidade.',

    items: [
      'Gerenciamento e Supervisão de Projetos',
      'Gerenciamento e Administração de Obras',
      'Consultoria em Engenharia',
      'Elaboração de Orçamentos',
      'Soluções Técnicas alinhadas ao IBRAOP',
    ],
  },

  {
    number: '02',
    title: 'Projetos Executivos',
    description:
      'Desenvolvimento de projetos completos com foco em eficiência técnica, segurança e viabilidade operacional.',

    items: [
      'Infraestrutura Viária',
      'Pavimentação',
      'Drenagem',
      'Sinalização',
      'Iluminação',
      'Pontes',
      'Contenção',
      'Urbanização',
      'Arquitetura',
      'Estrutural',
      'Hidrossanitário',
      'Elétrico',
      'Climatização',
      'SPDA',
      'Acessibilidade',
      'Prevenção e Combate a Incêndio',
    ],
  },

  {
    number: '03',
    title: 'Estudos Técnicos',
    description:
      'Levantamentos e estudos especializados para garantir precisão, segurança e inteligência construtiva.',

    items: [
      'Sondagem a Percussão',
      'Estudos Geotécnicos',
      'Levantamento Topográfico',
      'Aerofotogrametria',
      'Estudos Hidrológicos',
    ],
  },

  {
    number: '04',
    title: 'Regularização & Legalização',
    description:
      'Processos técnicos e documentais para regularização imobiliária e adequação normativa.',

    items: [
      'Legalização de Imóveis',
      'Regularização de Imóveis',
    ],
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className='services section' id='servicos'>

      <div className='container'>

        {/* TOP */}
        <div className='servicesTop'>

          <span className='servicesLabel'>
            Expertise Técnica
          </span>

          <h2 className='servicesTitle'>
            Soluções completas
            <span>
              para engenharia
              e infraestrutura.
            </span>
          </h2>

        </div>

        {/* LIST */}
        <div className='servicesList'>

          {services.map((service, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={service.title}
                className={`serviceItem ${isActive ? 'serviceItemActive' : ''}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: easing,
                }}
              >

                {/* HEADER */}
                <button
                  className='serviceHeader'
                  onClick={() =>
                    setActive(isActive ? null : index)
                  }
                >

                  <div className='serviceLeft'>

                    <span className='serviceNumber'>
                      {service.number}
                    </span>

                    <div className='serviceContent'>
                      <h3>{service.title}</h3>

                      <p>
                        {service.description}
                      </p>
                    </div>

                  </div>

                  <div className='serviceIcon'>
                    <span />
                    <span />
                  </div>

                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>

                  {isActive && (
                    <motion.div
                      className='serviceBody'
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: easing,
                      }}
                    >

                      <div className='serviceGrid'>

                        {service.items.map((item) => (
                          <motion.div
                            key={item}
                            className='serviceTag'
                            initial={{
                              opacity: 0,
                              y: 16,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: easing,
                            }}
                          >
                            {item}
                          </motion.div>
                        ))}

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}