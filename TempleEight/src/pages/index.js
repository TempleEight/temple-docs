import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Microservice Code Generation</>,
    imageUrl: 'img/microservices.png',
    description: (
      <>
        Temple provides tools for automatic development of microservice based
        systems. Focus on your business logic, and we&apos;ll do the chores.
      </>
    ),
  },
  {
    title: <>Industry-Standard Best Practices</>,
    imageUrl: 'img/best-practices.png',
    description: (
      <>
        Everything Temple generates is designed from the ground up to be
        readable, extendible and to follow standard best practices. You can
        trust that everything we produce will be usable long after you've
        outgrown us.
      </>
    ),
  },
  {
    title: <>Designed For Simplicity</>,
    imageUrl: 'img/templefile.png',
    description: (
      <>
        Templefiles are written in a simple, high level domain specific
        language. Know that all your services will be up and running in no time,
        so you can deploy from day one.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl('img/temple.svg')}
            />
            Generate{' '}
            <span className={styles.heroProjectKeywords}>microservice</span>{' '}
            systems at{' '}
            <span className={styles.heroProjectKeywords}>lightning speed</span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl('docs/introduction')}
            >
              Get Started
            </Link>
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=TempleEight&amp;repo=temple&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
