import React, { useEffect } from 'react';

import { reactTranslator } from 'Common/translators/reactTranslator';

import styles from './Welcome.module.pcss';

export type welcomeProps = {
    avgFaster: string;
    avgLessDataUsed: string;
};

export const Welcome = ({ avgFaster = '44%', avgLessDataUsed = '23%' }:welcomeProps) => {
    useEffect(() => {
        document.title = 'Welcome';
    }, []);

    return (
        <section className={styles.container}>
            {/* Icon PageBoost */}
            <div className={styles.headerIcon}>
                <img src="assets/icons/pageBoost-logo.png" alt="PageBoost" />
            </div>
            {/* Pin extension Instructions */}
            <div className={styles.welcomePinInstructions}>
                <div className={styles.welcomeInstruction}>
                    {reactTranslator.getMessage('welcome_1')}
                    <img
                        src="assets/icons/icn-extension.png"
                        alt="Extension"
                        className={styles.welcomeInstructionIcon}
                    />
                    {reactTranslator.getMessage('welcome_click_extension')}
                </div>
                <div className={styles.welcomeInstruction}>
                    {reactTranslator.getMessage('welcome_2')}
                    <img
                        src="assets/icons/icn-pin.png"
                        alt="Pin"
                        className={styles.welcomeInstructionIcon}
                    />
                    {reactTranslator.getMessage('welcome_show_toolbar')}
                </div>
                <div className={styles.welcomeInstruction}>
                    {reactTranslator.getMessage('welcome_3')}
                    <img
                        src="assets/icons/pageboost - favicon.png"
                        alt="PageBoost"
                        className={styles.welcomeInstructionIcon}
                    />
                    {reactTranslator.getMessage('welcome_click_pageboost')}
                </div>
            </div>
            {/* Title section */}
            <div className={styles.headerTitle}>
                <div className={styles.pageBoostInstalled}>
                    <img src="assets/icons/icn-category-check.png" alt="check" className={styles.checkIcon} />
                    <span className={styles.headerTitleBold}>{reactTranslator.getMessage('welcome_title')}</span>
                    {reactTranslator.getMessage('welcome_title_installed')}
                </div>
            </div>
            {/* Description section */}
            <div className={styles.headerDescription}>
                <span className={styles.headerBold}>
                    {reactTranslator.getMessage('welcome_description')}
                </span>
                {reactTranslator.getMessage('welcome_description_surfing')}
            </div>

            <div className={styles.headerDescription}>
                {reactTranslator.getMessage('welcome_completely')}
                <span className={styles.headerBold}>
                    {reactTranslator.getMessage('welcome_ad_tracker_free')}
                </span>
            </div>

            {/* Instructions label section */}
            <div className={styles.headerInstructionsLabel}>
                {reactTranslator.getMessage('welcome_follow_instructions')}
                <img src="assets/icons/arrow_1024.png" alt="PageBoost" className={styles.welcomeArrowImage1024} />
                <img src="assets/icons/arrow_1200.png" alt="PageBoost" className={styles.welcomeArrowImage1200} />
                <img src="assets/icons/arrow_1920.png" alt="PageBoost" className={styles.welcomeArrowImage1920} />
            </div>

            {/* Benefits section */}
            <div className={styles.benefitsContainer}>
                <div className={styles.welcomeBenefit}>
                    <img src="assets/icons/icn-pageboost.png" alt="PageBoost" />
                    <div className={styles.benefitText}>
                        {reactTranslator.getMessage('welcome_open_anytime')}
                    </div>
                    <div className={styles.benefitTextPageBoostExtension}>
                        {reactTranslator.getMessage('welcome_click_the')}
                        <img
                            src="assets/icons/pageboost - favicon.png"
                            alt="PageBoost"
                            className={styles.welcomeFavicon}
                        />
                        {reactTranslator.getMessage('welcome_icon_open')}
                    </div>
                </div>
                <div className={styles.welcomeBenefit}>
                    <img src="assets/icons/icn-ads-trackers.png" alt="Ads Trackers" />
                    <div className={styles.benefitText}>
                        {reactTranslator.getMessage('welcome_ads_blocked')}
                    </div>
                </div>
                <div className={styles.welcomeBenefit}>
                    <img src="assets/icons/icn-saveTime.png" alt="Save Time" />
                    <div className={styles.benefitText}>
                        {reactTranslator.getMessage('welcome_save_time')}
                    </div>
                    <div className={styles.welcomeBenefitMetric}>
                        <img src="assets/icons/icn-hours-saved.png" alt="Save Time" className={styles.metricIcon} />
                        <span className={styles.metricText}>
                            {reactTranslator.getMessage('welcome_avg')}
                            {avgFaster}
                        </span>
                        {reactTranslator.getMessage('welcome_faster_page')}
                    </div>
                    <div className={styles.welcomeDivider}>
                        <hr />
                    </div>
                    <div className={styles.welcomeBenefitMetricSimple}>
                        <img src="assets/icons/icn-data-saved.png" alt="Less Data" className={styles.metricIcon} />
                        <span className={styles.metricText}>
                            {avgLessDataUsed}
                        </span>
                        {reactTranslator.getMessage('welcome_less_data')}
                    </div>
                </div>
            </div>

            {/* Links section - Footer */}

            <div className={styles.linksContainer}>
                <div className={styles.link}>
                    <a
                        target="_blank"
                        href="https://pageboost.wpengine.com/uninstall/"
                        className={styles.welcomeLink}
                        rel="noreferrer"
                    >
                        {reactTranslator.getMessage('welcome_uninstall_instructions')}
                    </a>
                </div>
                <div className={styles.welcomeDividerVertical}>
                    <hr />
                </div>
                <div className={styles.link}>
                    <a
                        target="_blank"
                        href="https://pageboost.wpengine.com/eula/"
                        className={styles.welcomeLink}
                        rel="noreferrer"
                    >
                        {reactTranslator.getMessage('welcome_eula')}
                    </a>
                </div>
                <div className={styles.welcomeDividerVertical}>
                    <hr />
                </div>
                <div className={styles.link}>
                    <a
                        target="_blank"
                        href="https://pageboost.wpengine.com/privacy-policy/"
                        className={styles.welcomeLink}
                        rel="noreferrer"
                    >
                        {reactTranslator.getMessage('welcome_privacy_policy')}
                    </a>
                </div>
            </div>

        </section>
    );
};
