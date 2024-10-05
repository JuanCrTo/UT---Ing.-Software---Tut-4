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
        <span>Usabilidad:</span> Qué tan fácil es para los usuarios navegar y utilizar el software.<br /><br />
        <span>Rendimiento:</span> La velocidad y eficiencia con la que el software realiza las tareas. <br /><br />
        <span>Seguridad:</span> Protección contra accesos no autorizados y ataques. <br /><br />
        <span>Escalabilidad:</span> Capacidad de crecer y manejar un mayor número de usuarios. <br /><br />
        <span>Compatibilidad:</span> Qué tan bien se ejecuta en diferentes dispositivos y navegadores. <br /><br />
        <span>Mantenibilidad:</span> Facilidad para actualizar y corregir errores.
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
      "g) ¿Cuáles son los principales atributos de calidad del software IWeb?",
    answer: (
      <>
        Las actividades de SQA incluyen:<br /><br />
        <span> Revisiones de código</span> y auditorías. <br /><br />
        <span>Pruebas de software</span> (unitarias, de integración, de sistema). <br /><br />
        <span>Monitoreo de procesos de desarrollo</span> para asegurarse de que se sigan los estándares de calidad. <br /><br />
        <span>Mantenimiento de registros</span> y generación de informes de calidad. <br /><br />
        <span>Gestión de riesgos</span> y validación de procesos. <br /><br />
        <span>Evaluación continua</span> de los procesos y productos para identificar y corregir errores antes de la liberación del software.
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
        <span>Funcionalidad</span> <br />
        <span>Fiabilidad</span> <br />
        <span>Usabilidad</span> <br />
        <span>Eficiencia</span> <br />
        <span>Mantenibilidad</span> <br />
        <span>Portabilidad</span> <br />
      </>
    ),
  },
  {
    question:
      "k) Empresas certificadoras de calidad de software y empresas certificadas en Colombia",
    answer: (
      <>
        Dos ejemplos de empresas certificadoras son <span>Bureau Veritas</span> y <span>SGS</span>. Empresas certificadas en calidad en Colombia incluyen <span>Siesa</span> y <span>Compunet</span>. En Tolima, algunas empresas pueden tener certificaciones, pero requieren búsqueda específica sobre empresas regionales.
      </>
    ),
  },
  {
    question:
      "l) Requisitos del estándar ISO para un sistema de garantía de calidad efectiva",
    answer: (
      <>
        Los requisitos incluyen: <br /><br />
        <span>Documentación de procesos.</span> <br />
        <span>Mejora continua.</span> <br />
        <span>Auditorías internas.</span> <br />
        <span>Evaluación de satisfacción del cliente.</span> <br />
        <span>Gestión de recursos.</span> <br />
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
        <span>Número de clases y objetos.</span> <br />
        <span>Acoplamiento entre objetos.</span> <br />
        <span>Cohesión de las clases.</span> <br />
        <span>Profundidad del árbol de herencia.</span> <br />
      </>
    ),
  },
  {
    question:
      "o) ¿Existen Métricas de calidad para aplicaciones móviles?",
    answer: (
      <>
        Sí, se pueden aplicar métricas como: <br /><br />
        <span>Rendimiento:</span> Velocidad y eficiencia de la app.<br />
        <span>Experiencia del usuario</span> (UX).<br />
        <span>Consumo de batería.</span> <br />
        <span>Compatibilidad con dispositivos móviles.</span> <br />
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
