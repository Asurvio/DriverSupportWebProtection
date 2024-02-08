import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import { reactTranslator } from 'Common/translators/reactTranslator';
import { theme } from 'Common/styles';

import { rootStore } from '../../stores';

import styles from './wizard.module.pcss';

const LOGO = 'assets/svgs/dsone-logo.svg';
const IILUSTRATION_MOON = 'assets/illustration-moon.png';

export const Wizard = observer(() => {
    const { wizardStore } = useContext(rootStore);
    const { stepInfo, skipWizard, buttonTextKey } = wizardStore;

    const containerClassName = cn(styles.container);

    return (
        <section className={containerClassName}>
            <div className={styles.header}>
                <img src={LOGO} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.inner}>
                <img
                    src={IILUSTRATION_MOON}
                    alt="illustation-moon"
                    className={styles.illustrationMoon}
                />
                <div className={cn(styles.info, styles.main)}>
                    {reactTranslator.getMessage(stepInfo.nameKey)}
                </div>
                <div className={cn(styles.info, styles.description)}>
                    {reactTranslator.getMessage(stepInfo.descriptionKey)}
                </div>
                <div
                    className={cn(theme.common.customLink, styles.linkText)}
                    onClick={skipWizard}
                    onKeyDown={skipWizard}
                    role="button"
                    tabIndex={0}
                >
                    {reactTranslator.getMessage(buttonTextKey)}
                </div>
            </div>
        </section>
    );
});
