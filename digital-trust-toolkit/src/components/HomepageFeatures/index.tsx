import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  path: string;
  description?: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Foundations',
    path: '/docs/foundations',
    description: (
      <>
        Understand the core principles and frameworks of digital trust.
      </>
    ),
  },
  {
    title: 'Experience Patterns',
    path: '/docs/experience-patterns',
    description: (
      <>
        Explore proven patterns and use cases for implementing digital trust.
      </>
    ),
  },
  {
    title: 'Delivery Manual',
    path: '/docs/delivery-manual',
    description: (
      <>
        Find step-by-step guidance for successful digital trust adoption.
      </>
    ),
  },
  {
    title: 'Resources',
    path: '/docs/resources',
    description: (
      <>
        Utilize a comprehensive set of tools and guides to launch your digital trust projects.
      </>
    ),
  },
];

function Feature({ title, path, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3', styles.feature)}>
      <Link to={path} className={clsx('unstyled-link')}>
        <div>
          <Heading as="h2">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
