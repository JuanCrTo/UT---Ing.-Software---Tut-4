import React, { useState } from "react";
import styles from "../styles/Questionnaire.module.scss";
import { Question } from "@/interface/Question.interface";

const questionsAndAnswers: Question[] = [
  {
    question:
      "a) Diferencia entre la calidad de diseño y la calidad de concordancia",
    answer: (
      <>
        <span>Calidad de diseño:</span> Se refiere a qué tan bien está diseñado
        un producto desde su concepción, es decir, si cumple con los requisitos
        y especificaciones que se planearon en la fase de diseño. Esto implica
        tomar en cuenta aspectos como funcionalidad, ergonomía, eficiencia y
        otras características deseadas desde el inicio.
        <br />
        <br />
        <span>Calidad de concordancia:</span> Se refiere a qué tan bien el
        producto final coincide con el diseño original, es decir, qué tan bien
        el proceso de producción o desarrollo se ajusta a las especificaciones
        establecidas. Evalúa si el producto final está libre de defectos y
        cumple con los estándares de calidad definidos en el diseño.
      </>
    ),
  },
  {
    question: "b) ¿En qué consiste la garantía de calidad?",
    answer: (
      <>
        La garantía de calidad (QA - Quality Assurance) consiste en un conjunto
        de actividades planificadas y sistemáticas implementadas en un sistema
        de gestión para asegurar que los productos o servicios cumplen con los
        requisitos de calidad. Incluye procesos como revisiones, auditorías y
        pruebas que se realizan durante el desarrollo y la producción para
        prevenir defectos y garantizar que el producto cumpla con los estándares
        establecidos.
      </>
    ),
  },
  {
    question: "c) ¿Cuál es la base de las medidas de la calidad del software?",
    answer: (
      <>
        La base de las medidas de la calidad del software está en cómo este
        cumple con:
        <br />
        <br />
        <span>Requisitos funcionales:</span> Se refiere a qué tan bien está
        diseñado un producto desde su concepción, es decir, si cumple con los
        requisitos y especificaciones que se planearon en la fase de diseño.
        Esto implica tomar en cuenta aspectos como funcionalidad, ergonomía,
        eficiencia y otras características deseadas desde el inicio.
        <br />
        <br />
        <span>Calidad de concordancia:</span> Se refiere a qué tan bien el
        producto final coincide con el diseño original, es decir, qué tan bien
        el proceso de producción o desarrollo se ajusta a las especificaciones
        establecidas. Evalúa si el producto final está libre de defectos y
        cumple con los estándares de calidad definidos en el diseño.
      </>
    ),
  },
  {
    question:
      "d) ¿Cuáles son los principales atributos de calidad del software IWeb?",
    answer: (
      <>
        Los principales atributos de calidad del software, como IWeb (o
        cualquier WebApp), suelen incluir:<br /><br />
        <li><span>Usabilidad:</span> Qué tan fácil es para los usuarios navegar y utilizar el software.</li>
        <li><span>Rendimiento:</span> La velocidad y eficiencia con la que el software realiza las tareas.</li>
        <li><span>Seguridad:</span> Protección contra accesos no autorizados y ataques.</li>
        <li><span>Escalabilidad:</span> Capacidad de crecer y manejar un mayor número de usuarios.</li>
        <li><span>Compatibilidad:</span> Qué tan bien se ejecuta en diferentes dispositivos y navegadores.</li>
        <li><span>Mantenibilidad:</span> Facilidad para actualizar y corregir errores.</li>        
      </>
    ),
  },
  {
    question:
      "e) Diferencia entre usabilidad y accesibilidad",
    answer: (
      <>
        <span>Usabilidad:</span> Se refiere a qué tan fácil e intuitivo es para los usuarios interactuar con una aplicación o sistema. Involucra factores como la facilidad de aprendizaje, eficiencia de uso, y satisfacción del usuario. <br /><br />

        <span>Accesibilidad:</span> Se refiere a qué tan accesible es una aplicación para personas con discapacidades (por ejemplo, personas con limitaciones visuales, auditivas o motoras). Asegura que todos los usuarios, independientemente de sus capacidades, puedan acceder y utilizar el software.
      </>
    ),
  },
  {
    question:
      "f) Ranking de WebApps colombianas con mayor calidad de diseño",
    answer: (
      <>
        En Colombia, existen varias agencias de desarrollo web reconocidas por su alta calidad de diseño y desarrollo de aplicaciones web. Algunas de las más destacadas incluyen Expiey, una agencia que se enfoca en diseños personalizados y optimización SEO, y AMD, con más de 17 años de experiencia ofreciendo soluciones creativas y técnicas avanzadas. También sobresalen Design Plus, que trabaja con plataformas como Shopify y Webflow, y Blue Design, especializada en desarrollo de software y soluciones a medida para mejorar procesos comerciales.
      </>
    ),
  },
  {
    question:
      "g) ¿Cuáles son las actividades de SQA?",
    answer: (
      <>
        Las actividades de SQA incluyen:<br /><br />
        <li><span>Estándares:</span> Definir procedimientos de calidad.</li>
        <li><span>Requisitos:</span> Revisar claridad y verificabilidad.</li>
        <li><span>Planificación:</span> Establecer objetivos de calidad.</li>
        <li><span>Revisiones:</span> Evaluar documentos y entregables.</li>
        <li><span>Pruebas:</span> Detectar defectos en el software.</li>
        <li><span>Gestión de Defectos:</span> Registrar y seguir defectos.</li>
        <li><span>Métricas:</span> Analizar indicadores de calidad.</li>
        <li><span>Formación:</span> Capacitar al equipo en calidad.</li>
        <li><span>Proveedores:</span> Evaluar software de terceros.</li>
        <li><span>Mejora Continua:</span> Implementar mejoras basadas en retroalimentación.</li>
      </>
    ),
  },
  {
    question:
      "h) ¿Qué es una Revisión Técnica Formal (RTF)?",
    answer: (
      <>
        Una <span>RTF</span> es una reunión estructurada donde un equipo revisa el trabajo técnico, como código o diseño, para identificar errores, asegurar la conformidad con los estándares y mejorar la calidad general del producto. Los participantes siguen procedimientos definidos, y los resultados de la revisión se documentan formalmente.
      </>
    ),
  },
  {
    question:
      "i) ¿Cuál es el estándar de garantía de calidad ISO que se aplica a la ingeniería del software?",
    answer: (
      <>
        El estándar más utilizado es <span>ISO/IEC 9001</span>, que establece los requisitos para un sistema de gestión de calidad. También se aplica el <span>ISO/IEC 25010</span>, que define el modelo de calidad para productos de software.
      </>
    ),
  },
  {
    question:
      "j) ¿Cuáles atributos de calidad están referidos en la norma ISO/IEC 9126?",
    answer: (
      <>
        La norma ISO/IEC 9126 define los siguientes atributos de calidad del software: <br /><br />
        <li><span>Funcionalidad</span></li>
        <li><span>Fiabilidad</span></li>
        <li><span>Usabilidad</span></li>
        <li><span>Eficiencia</span></li>
        <li><span>Mantenibilidad</span></li>
        <li><span>Portabilidad</span></li>
      </>
    ),
  },
  {
    question:
      "k) Mencione dos empresas certificadoras de calidad de software y dos empresas actualmente certificadas en Colombia (existe alguna empresa tolimense con certificación de calidad?)",
    answer: (
      <>
        <span>Empresas Certificadoras de Calidad de Software</span>
        <li>ISO (Organización Internacional de Normalización): Proporciona certificaciones para estándares de calidad como ISO 9001 e ISO/IEC 25010.</li>
        <li>CMMI Institute: Ofrece certificaciones para el modelo de madurez CMMI, que ayuda a las organizaciones a mejorar sus procesos.</li>

        <br /><span>Empresas Certificadas en Colombia</span>
        <li>Sofka Technologies: Certificada en ISO 9001, se especializa en desarrollo de software y soluciones tecnológicas.</li>
        <li>Bancolombia: También cuenta con certificaciones de calidad, incluidas normas ISO en varios de sus procesos.</li>        

        <br /><span>Empresas en Tolima con Certificación de Calidad</span><br />
        En el departamento del Tolima, Inalambrica S.A.S. es una empresa que cuenta con certificaciones de calidad, específicamente ISO 9001, que avala sus procesos de gestión.
      </>
    ),
  },
  {
    question:
      "l) Requisitos del estándar ISO para un sistema de garantía de calidad efectiva",
    answer: (
      <>
        Los requisitos incluyen: <br /><br />
        <li><span>Documentación de procesos.</span></li>
        <li><span>Mejora continua.</span></li>
        <li><span>Auditorías internas.</span></li>
        <li><span>Evaluación de satisfacción del cliente.</span></li>
        <li><span>Gestión de recursos.</span></li>
      </>
    ),
  },
  {
    question:
      "m) ¿Qué son las Métricas de la Calidad del software?",
    answer: (
      <>
        Son medidas cuantitativas que evalúan diferentes aspectos del software como <span>eficiencia</span>, <span>mantenibilidad</span> o <span>usabilidad</span>.<br /><br />

        <span>Métricas de Predicción:</span> Se usan para anticipar problemas antes de que ocurran, basadas en datos históricos. <br />
        <span>Métricas de Control:</span> Evalúan la calidad a medida que se desarrolla el software, y monitorean su evolución.<br />
      </>
    ),
  },
  {
    question:
      "n) Métricas Orientadas a Objetos:",
    answer: (
      <>
        Estas métricas se enfocan en evaluar características de los sistemas orientados a objetos, como: <br /><br />
        <li><span>Número de clases y objetos.</span></li>
        <li><span>Acoplamiento entre objetos.</span></li>
        <li><span>Cohesión de las clases.</span></li>
        <li><span>Profundidad del árbol de herencia.</span></li>
      </>
    ),
  },
  {
    question:
      "o) ¿Existen Métricas de calidad para aplicaciones móviles?",
    answer: (
      <>
        Sí, se pueden aplicar métricas como: <br /><br />
        <li><span>Rendimiento:</span> Velocidad y eficiencia de la app.</li>
        <li><span>Experiencia del usuario</span> (UX).</li>
        <li><span>Consumo de batería.</span></li>
        <li><span>Compatibilidad con dispositivos móviles.</span></li>
      </>
    ),
  },
  {
    question:
      "p) Técnica más utilizada para valorar la calidad",
    answer: (
      <>
        Una de las técnicas más utilizadas es la <span>Revisión Técnica Formal</span> (RTF) junto con <span>pruebas automatizadas</span> y <span>auditorías internas</span> para asegurar que el software cumpla con los estándares de calidad establecidos.
      </>
    ),
  },
  {
    question:
      "q) Modelos y Estándares de Calidad del Software",
    answer: (
      <>
        <span>Modelos de Proceso</span>
        <li>CMMI: Mejora de procesos con niveles de madurez.</li>
        
        <li>SPICE: Evaluación de procesos de software.</li>
        <li>Agile: Enfoque iterativo y colaborativo.</li> <br />

        <span>Modelos de Producto</span>
        <li>ISO/IEC 25010: Evaluación de características de calidad.</li>
        <li>COSMIC: Medición de funcionalidad.</li>
        <li>FURPS: Calidad en funcionalidad y usabilidad.</li>
      </>
    ),
  },
];

const Questionnaire = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    const toggleCard = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
          <h2 className={styles.header}>Cuestionario sobre Calidad de Software</h2>
          <div className={styles.cardContainer}>
            {questionsAndAnswers.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${expandedIndex === index ? styles.expanded : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className={styles.question}>{item.question}</div>
                {expandedIndex === index && <div className={styles.answer}>{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      );
};

export default Questionnaire;
