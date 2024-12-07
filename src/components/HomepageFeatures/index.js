import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Definir la lista de patrones de comportamiento
const BehaviorPatternList = [
  {
    title: 'Chain of Responsibility',
    imagePath: '/img/chain-of-responsibility.png',
    description: (
      <>
        Este patrón permite pasar solicitudes a lo largo de una cadena de manejadores hasta que uno de ellos procese la solicitud.
      </>
    ),
  },
  {
    title: 'Observer',
    imagePath: '/img/observer.png',
    description: (
      <>
        Define una relación de dependencia entre objetos, de manera que cuando un objeto cambia su estado, notifica a sus dependientes automáticamente.
      </>
    ),
  },
  {
    title: 'Strategy',
    imagePath: '/img/strategy.png',
    description: (
      <>
        Permite definir una familia de algoritmos y los hace intercambiables en tiempo de ejecución, separando la lógica del contexto donde se usan.
      </>
    ),
  },
];

// Componente para mostrar cada patrón de comportamiento
function PatternFeature({ imagePath, title, description }) {
  return (
    <div className={clsx('col col--12', styles.patternFeature)}>
      <div className="row">
        {/* Imagen a la izquierda */}
        <div className="col col--3">
          <div className="text--center">
            <img src={imagePath} className={styles.patternSvg} alt={title} role="img" />
          </div>
        </div>

        {/* Texto (título y descripción) a la derecha */}
        <div className="col col--9">
          <div className="padding-horiz--md">
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal para mostrar todos los patrones de comportamiento
export default function BehaviorPatternsFeatures() {
  return (
    <section className={styles.patternsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Patrones de Diseño: De Comportamiento
        </Heading>
        <p className={styles.sectionSubtitle}>
          Aprende cómo mejorar la comunicación y coordinación entre objetos en tu sistema.
        </p>
        <div className="row">
          {BehaviorPatternList.map((pattern, idx) => (
            <PatternFeature key={idx} {...pattern} />
          ))}
        </div>
      </div>
    </section>
  );
}
