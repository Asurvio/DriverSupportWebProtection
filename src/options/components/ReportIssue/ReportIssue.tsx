import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { reactTranslator } from 'Common/translators/reactTranslator';
import { theme } from 'Common/styles';

import styles from './ReportIssue.module.pcss';

const bg = 'linear-gradient(45deg, rgba(15,39,116,1) 0%, rgba(43,70,158,1) 35%, rgba(21,146,200,1) 100%)';
const reportIssueIcon = 'assets/svgs/icn-report-issue.svg';
const languageIcon = 'assets/svgs/icn-language-specific.svg';
const LOGO = 'assets/svgs/dsone-logo.svg';
const GREEN_CHECK_ICON = 'assets/svgs/icn-green-check.svg';
const CLOSE_ICON = 'assets/svgs/icn-close.svg';

const ThanksModal = ({ onClose }: { onClose: () => void }) => (
    <div className={styles.backerThanksModalContainer}>
        <div className={styles.thanksModalContainer}>
            <button onClick={onClose} type="button">
                <img
                    src={CLOSE_ICON}
                    alt="icon close"
                    className={styles.closeIcon}
                />
            </button>
            <img
                src={GREEN_CHECK_ICON}
                alt="icon green check"
                className={styles.greenCheckIcon}
            />
            <h1 className={styles.thanksModalTile}>
                {reactTranslator.getMessage('thanks_modal_title')}
            </h1>
            <p className={styles.thanksModaldescription}>
                {reactTranslator.getMessage('thanks_modal_description')}
            </p>
            <button
                className={styles.thanksModalCloseButton}
                onClick={onClose}
                type="button"
            >
                <span>
                    {reactTranslator.getMessage('thanks_modal_close_button')}
                </span>
            </button>
        </div>
    </div>
);

export const ReportIssue = () => {
    const [showThanksModal, setShowThanksModal] = useState(false);
    const [issueExperiencieValue, setIssueExperiencieValue] = useState('');
    const currentPage = localStorage.getItem('currentPage');
    const closeThanksModal = () => {
        setShowThanksModal(false);
        window.close();
    };

    useEffect(() => {
        document.body.style.background = bg;

        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    }, []);

    return (
        <>
            <section className={styles.container}>
                {showThanksModal && <ThanksModal onClose={closeThanksModal} />}
                <img src={LOGO} alt="logo" className={styles.logo} />
                <img
                    src={reportIssueIcon}
                    alt="icn-report-issue"
                    className={styles.reportIssueIcon}
                />
                <div className={styles.cnbcContainer}>
                    <img
                        src={languageIcon}
                        alt="icn-language-specific"
                        className={styles.languagesIcon}
                    />
                    <h1 className={styles.cnbc}>{currentPage}</h1>
                </div>
                <h3 className={styles.reportAnIssueText}>
                    {reactTranslator.getMessage('report_issue_report_issue')}
                </h3>
                <h5 className={styles.whatIssueText}>
                    <span>* </span>
                    {reactTranslator.getMessage('report_issue_what_issue')}
                </h5>
                <input
                    className={styles.input}
                    onChange={(e) => setIssueExperiencieValue(e.target.value)}
                />
                <h6 className={styles.briefDescriptionText}>
                    {reactTranslator.getMessage(
                        'report_issue_description_issue',
                    )}
                </h6>
                <button
                    className={cn(styles.subtmitButton, theme.button.green)}
                    disabled={!issueExperiencieValue}
                    onClick={() => setShowThanksModal(true)}
                    type="button"
                >
                    <span className={styles.submitText}>
                        {reactTranslator.getMessage('report_issue_submit')}
                    </span>
                </button>
            </section>
        </>
    );
};
