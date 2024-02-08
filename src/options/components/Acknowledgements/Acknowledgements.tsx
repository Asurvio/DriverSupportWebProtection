import { theme } from 'Common/styles';
import { reactTranslator } from 'Common/translators/reactTranslator';
import React from 'react';
import styles from './Acknowledgements.module.pcss'

export const Acknowledgements = () => {
  return <section className={styles.container}>
    <h2 className={theme.common.headingMain}>
      {reactTranslator.getMessage('acknowledgements_title')}
    </h2>
    <hr className={styles.divider} />
    <ul>
      <li>ace: https://github.com/ajaxorg/ace</li>
      <li>moment: https://github.com/moment/moment</li>
      <li>nanobar: https://github.com/jacoborus/nanobar</li>
      <li>crypto-js: https://github.com/brix/crypto-js</li>
      <li>D3: https://github.com/d3/d3</li>
      <li>AdGuard: https://github.com/AdguardTeam/AdGuardMV3</li>
      <li>c3: https://github.com/c3js/c3</li>
      <li>simply-deferred: https://github.com/sudhirj/simply-deferred</li>
      <li>SHA256: https://github.com/AndersLindman/SHA256</li>
    </ul>
  </section>;
};