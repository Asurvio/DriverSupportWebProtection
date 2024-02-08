import React, { useContext } from 'react';
import cn from 'classnames';

import { theme } from 'Common/styles';
import { reactTranslator } from 'Common/translators/reactTranslator';

import { rootStore } from '../../stores';
import { PageInfo } from '../PageInfo';
import { Switcher } from '../Switcher';
import styles from '../DisabledProtectionScreen/DisabledProtectionScreen.module.pcss';
import { sender } from '../../messaging/sender';

export const EnabledProtectionScreen = () => {
    const { settingsStore } = useContext(rootStore);
    const { pauseProtectionWithTimeout } = settingsStore;

    const onPauseProtectionTimeoutClick = async () => {
        await pauseProtectionWithTimeout();
        await sender.reloadActiveTab();
    };

    return (
        <>
            <PageInfo />
            <Switcher />

            {/* TODO: count blocked on the page */}
            {/* <Action /> */}
            {!settingsStore.isAllowlisted && (
                <>
                    <hr className={theme.common.horizontalDivider} />
                    <div
                        className={cn(theme.common.customLink)}
                        onClick={onPauseProtectionTimeoutClick}
                        onKeyDown={onPauseProtectionTimeoutClick}
                        role="button"
                        tabIndex={0}
                    >
                        {reactTranslator.getMessage('popup_pause_for_sixty_seconds')}
                    </div>
                </>
            )}
        </>
    );
};
