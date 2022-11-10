import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Head from "@docusaurus/Head";
import logoColor from "@site/static/img/LogoFiles/logo-color-no-background.png";
import logoWhite from "@site/static/img/LogoFiles/logo-white-no-background.png";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "dark" ? logoWhite : logoColor;
  return (
    <>
      <header
        className={clsx("hero ", styles.heroBanner)}
        style={{
          backgroundSize: "100% 100%",
          backgroundImage: `url(https://res.cloudinary.com/hilnmyskv/image/upload/v1630315356/ui-library/hero/curves.svg)`,
        }}
      >
        <div className={clsx("container", styles.heroContainer)}>
          <img
            src={logoSrc}
            height="auto"
            width="350px"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <h1 className="hero__title" style={{ display: "none" }}>
            {siteConfig.title}
          </h1>
          <p
            className="hero__subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >Mejora tu nivel  de desarrollo de React
            {siteConfig.tagline}
          </p>
          <div
            className={styles.buttons}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Ver Recursos
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Blog
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
