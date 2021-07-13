import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Monthly updates',
    description: (
      <>
        Get your updates once Google starts rolling out SPLs to their phones. You'll never be behind, only be forward in time.
      </>
    ),
  },
  {
    title: 'Stability',
    description: (
      <>
        Despite being a port, stability is still my first priority. You don't have to worry about that, as it's as stable as built ROMs. Impressive.  
      </>
    ),
  },
  {
    title: 'VoLTE',
    description: (
      <>
        Now, for the most important function you can't live with, VoLTE, yes it works. If it doesn't, consider recharging your SIM or complaining to Google.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
