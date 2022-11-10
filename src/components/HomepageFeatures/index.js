import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Mejora",
    Svg: require("@site/static/img/home/react.svg").default,
    description: (
      <>
        Mejora tu nivel de desarrollo de React. Encuentra informacion util,
        datos, herramientas, bibliotecas, consejos, guias y mas.
      </>
    ),
  },
  {
    title: "Facil de usar",
    Svg: require("@site/static/img/home/team.svg").default,

    description: (
      <>
        React Libs se centra en la documentación, es una base de datos
        seleccionada por la comunidad de las bibliotecas para React más utiles y
        populares. En español!
      </>
    ),
  },
  {
    title: "Comunidad",
    Svg: require("@site/static/img/home/writer.svg").default,
    description: (
      <>Contenido gratuito creado por la comunidad de desarrolladores web.</>
    ),
  },
  {
    title: "Optimiza",
    Svg: require("@site/static/img/home/elements.svg").default,
    description: (
      <>
        React es genial, pero tiene varios aspectos con los que no puede lidiar.
        Podemos encontrar paquetes npm muy utiles para mejorar nuestro
        desarrollo.
      </>
    ),
  },
  {
    title: "Rapidez",
    Svg: require("@site/static/img/home/join.svg").default,
    description: (
      <>
        Si eres nuevo en el ecosistema de React, probablemente te cueste
        bastante tiempo buscar cual es la mejor solución; esta documentación te
        ayudara.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")} style={{ margin: "1rem auto" }}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container", styles.featuresGrid)}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
