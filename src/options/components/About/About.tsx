import React from 'react';
import cn from 'classnames';

import { reactTranslator } from 'Common/translators/reactTranslator';
import { theme } from 'Common/styles';
import {
    ACKNOWLEDGMENTS,
    GITHUB,
    PRIVACY,
    WEBSITE,
    EULA,
} from 'Common/constants/urls';

import styles from './About.module.pcss';

const linkList = [
    {
        href: PRIVACY,
        label: reactTranslator.getMessage('options_privacy_policy'),
    },
    {
        href: WEBSITE,
        label: reactTranslator.getMessage('options_site'),
    },
    {
        href: ACKNOWLEDGMENTS,
        label: reactTranslator.getMessage('options_acknowledgment'),
    },
    {
        href: GITHUB,
        label: reactTranslator.getMessage('options_github'),
    },
    {
        href: EULA,
        label: reactTranslator.getMessage('options_EULA'),
    },
];

export const About = () => {
    return (
        <section className={styles.container}>
            <h2 className={theme.common.headingMain}>
                {reactTranslator.getMessage('options_about_title')}
            </h2>
            <hr className={styles.divider} />
            <div className={theme.common.headingSecondary}>
                <div>
                    {reactTranslator.getMessage('options_about_product')}
                </div>
                <div>
                    {`${reactTranslator.getMessage('options_about_version')} ${chrome.runtime.getManifest().version} `}
                </div>
            </div>
            <div className={theme.common.headingSecondary}>
                <div>
                    {`© ${new Date().getFullYear()} Driver Support`}
                </div>
                <div>
                    {reactTranslator.getMessage('options_about_rights_reserved')}
                </div>
            </div>
            <div className={styles.readMoreSection}>
                {linkList.map(({ href, label }) => {
                    if (href.startsWith("#")) {
                        return <div className={styles.readMoreLinkWrapper} key={href}>
                            <a
                                href={href}
                                className={cn(theme.common.link, styles.readMoreLink)}
                            >
                                {label}
                            </a>
                        </div>
                    }
                    else
                    {
                        return <div className={styles.readMoreLinkWrapper} key={href}>
                        <a
                            href={href}
                            className={cn(theme.common.link, styles.readMoreLink)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {label}
                        </a>
                    </div>
                    }
                })}
            </div>
        </section>
    );
};
