import {
    action,
    computed,
    makeObservable,
    observable,
} from 'mobx';

import type { RootStore } from './RootStore';

const INITIAL_STEP = 1;
const LAST_STEP = 4;

interface StepInfo {
    nameKey: string;
    descriptionKey: string;
}

const stepInfoMap: { [key: number]: StepInfo } = {
    1: {
        nameKey: 'popup_well_done',
        descriptionKey: 'popup_browsing_faster',
    },
};

export class WizardStore {
    public rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this);
    }

    @observable step = INITIAL_STEP;

    @computed get stepInfo() {
        return stepInfoMap[this.step];
    }

    @computed get buttonTextKey() {
        switch (this.step) {
            case LAST_STEP:
                return 'popup_done';
            default:
                return 'popup_done';
        }
    }

    @action
    setStep = (step: number) => {
        this.step = step;
    };

    @action
    skipWizard = async () => {
        await this.rootStore.settingsStore.hideWizard();
    };
}
