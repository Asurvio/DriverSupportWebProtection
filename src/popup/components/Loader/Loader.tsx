import React from 'react';

import style from './loader.module.pcss';

export const Loader = () => {
    return (
        <div className={style.container}>
            <img
                className={style.loader}
                src={chrome.runtime.getURL('assets/svgs/dsone-logo.svg')}
                alt="Loading"
            />
        </div>
    );
};
