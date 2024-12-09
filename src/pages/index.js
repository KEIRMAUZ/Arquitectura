import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.customHeroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <Heading as="h1" className={styles.heroTitle}>
          Patrones de Diseño: De Comportamiento
        </Heading>
        <p className={styles.heroSubtitle}>
          Explora los patrones que modelan el comportamiento de objetos y su interacción.
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button', styles.customButton)}
            to="/docs/intro">
            Clic aqui.
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Patrones de Diseño: De Comportamiento`}
      description="Explora los patrones de diseño enfocados en el comportamiento de objetos.">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
