import React from 'react';

import { reactTranslator } from 'Common/translators/reactTranslator';
import { theme } from 'Common/styles';

import styles from './Footer.module.pcss';

export const Footer = () => {
    const goToReportIssue = () => {
        chrome.tabs.create({
            url: 'options.html#report-issue',
        });
    };

    return (
        <>
            {/* hidden till we have an endpoint to send this to
            <span
                className={theme.common.pageInfoAdditional}
                onClick={goToReportIssue}
                onKeyDown={goToReportIssue}
                role="button"
                tabIndex={0}
                style={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    marginBottom: "48px",
                    fontSize: "18px",
                }}
            >
                {reactTranslator.getMessage('popup_report_an_issue')}
            </span> */}
            <h6
                className={`${theme.common.pageInfoAdditional} ${styles.worksWithManifestText}`}
            >
                {reactTranslator.getMessage('popup_works_with_manifest')}
            </h6>
        </>
    );
};
