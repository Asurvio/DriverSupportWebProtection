import React, { useContext, useLayoutEffect } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import { Icons } from 'Common/components/ui';
import { log } from 'Common/logger';
import { NOTIFIER_EVENTS } from 'Common/constants/common';
import { Sidebar } from 'Options/components/Sidebar';
import { Notifications } from 'Options/components/Notifications';
import { About } from 'Options/components/About';
import { ReportIssue } from 'Options/components/ReportIssue';
import { Limits } from 'Options/components/Limits';
import { rootStore } from 'Options/stores';
import { Settings } from 'Options/components/Settings';
import { CustomFilters } from 'Options/components/Filters';
import { UserRules } from 'Options/components/UserRules';
import { Languages } from 'Options/components/Languages';
import { LoaderOverlay } from 'Options/components/LoaderOverlay';
import { useEventListener } from 'Common/hooks/useEventListener';

import { useNotifyDynamicRulesLimitsError } from '../../hooks/useNotifyDynamicRulesLimitError';

import styles from './options-app.module.pcss';
import { Acknowledgements } from '../Acknowledgements';

export const OptionsApp = observer(() => {
    const store = useContext(rootStore);
    const { settingsStore, optionsStore } = store;
    const { optionsDataReady } = settingsStore;

    const checkAndNotifyDynamicRulesError = useNotifyDynamicRulesLimitsError();

    const getOptionsData = async () => {
        try {
            await settingsStore.getOptionsData();
            await optionsStore.fetchUserRules();
            settingsStore.setOptionsDataLoaded();
        } catch (e) {
            log.error(e);
        }
    };

    useEventListener('options', {
        [NOTIFIER_EVENTS.SET_RULES]: async (data: any) => {
            const { value } = data;
            const err = await optionsStore.updateUserRules(value);
            checkAndNotifyDynamicRulesError(err);
        },
    });

    useLayoutEffect(() => {
        getOptionsData();
    }, []);

    const content = (
        <HashRouter hashType="noslash">
            <Switch>
                {/* The route which will not render the sidebar and icons */}
                <Route path="/report-issue" component={ReportIssue} />
                {/* Catch-all route that will match everything except welcome page */}
                <Route>
                    <Icons />
                    <div className={styles.section}>
                        <Sidebar />
                        <div className={styles.content}>
                            <div className={styles.inner}>
                                <Switch>
                                    <Route
                                        path="/"
                                        exact
                                        component={Settings}
                                    />
                                    <Route path="/about" component={About} />
                                    <Route path="/limits" component={Limits} />
                                    <Route path="/acknowledgements" component={Acknowledgements} />
                                    <Route
                                        path="/userrules"
                                        component={UserRules}
                                    />
                                    <Route
                                        path="/customfilters"
                                        component={CustomFilters}
                                    />
                                    <Route
                                        path="/languages"
                                        component={Languages}
                                    />
                                    <Route />
                                </Switch>
                                <Notifications />
                                <LoaderOverlay />
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </HashRouter>
    );

    return optionsDataReady ? (
        content
    ) : (
        <>
            <Icons />
            <LoaderOverlay />
        </>
    );
});
