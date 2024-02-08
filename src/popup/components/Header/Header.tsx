import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { translator } from 'Common/translators/translator';
import { Icon, TooltipIcon, IconId } from 'Common/components/ui';
import { reactTranslator } from 'Common/translators/reactTranslator';
import { PROTECTION_PAUSE_TIMEOUT_S } from 'Common/constants/common';

import { sender } from '../../messaging/sender';
import { rootStore } from '../../stores';

import styles from './Header.module.pcss';

const LOGO = 'assets/svgs/dsone-logo.svg';

export const Header = observer(() => {
    const { settingsStore } = useContext(rootStore);
    const { protectionEnabled, pauseProtection, pauseProtectionWithTimeout } = settingsStore;

    const openAssistant = async () => {
        await sender.openAssistant();
        window.close();
    };

    const openExtensionSettings = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await sender.openOptions();
        window.close();
    };

    const onPauseProtectionClick = async () => {
        await pauseProtection();
        await sender.reloadActiveTab();
    };

    const onPauseProtectionTimeoutClick = async () => {
        await pauseProtectionWithTimeout();
        await sender.reloadActiveTab();
    };

    // TODO remove fieldset child buttons disable after the bug is fixed https://github.com/facebook/react/issues/7711
    return (
        <div className={styles.popupHeader}>
            <div className={styles.popupHeaderLogo}>
                <img src={LOGO} alt="logo" />
            </div>
            <fieldset
                className={styles.popupHeaderButtons}
            >
                <button
                    className={styles.popupHeaderButton}
                    type="button"
                    onClick={openAssistant}
                    title={translator.getMessage(
                        'options_block_ads_on_website',
                    )}
                >
                    <Icon id={IconId.START} />
                </button>
                <button
                    className={styles.popupHeaderButton}
                    type="button"
                    onClick={openExtensionSettings}
                    title={translator.getMessage('options_open_settings')}
                >
                    <Icon id={IconId.SETTINGS} />
                </button>
            </fieldset>
        </div>
    );
});
