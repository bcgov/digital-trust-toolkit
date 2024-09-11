import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeLinks from '@site/src/components/PageLinks/HomeLinks';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.homeBanner)}>
      <div className={clsx('primary-background', styles.homeBanner1)}>
        <Heading as="h1">
          {siteConfig.title}
        </Heading>
        <p>{siteConfig.tagline}</p>
      </div>
      <div className={clsx('secondary-background', styles.homeBanner2)} />
      <div className={clsx('tertiary-background', styles.homeBanner3)} />
    </header>
  );
}

function HomepageFooter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer className={clsx('secondary-background', styles.homeFooter)}>
      <h3>Acknowledgement</h3>
      <p>The B.C. Public Service acknowledges the territories of First Nations around B.C. and is grateful to carry out our work on these lands. We  acknowledge the rights, interests, priorities, and concerns of all Indigenous Peoples - First Nations, Métis, and Inuit - respecting and acknowledging their distinct cultures, histories, rights, laws, and governments.</p>
    </footer>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      <HomepageHeader />
      <main className={clsx(styles.homeMain)}>
        <Heading as="h1" className={clsx('text--center')}>
          Explore the {siteConfig.title}
        </Heading>
        <HomeLinks />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
