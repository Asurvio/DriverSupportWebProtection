import React from 'react';
import { NavLink } from 'react-router-dom';

import { reactTranslator } from 'Common/translators/reactTranslator';
import { Icon, IconId } from 'Common/components/ui';

import styles from './nav.module.pcss';

const NAVIGATION_LINKS = {
    ABOUT: '/about',
    LIMITS: '/limits',
};

interface NavProps {
    closeSidebar: () => void;
}

const Nav = ({ closeSidebar }: NavProps) => {
    const onClick = () => {
        closeSidebar();
    };

    return (
        <div className={styles.nav}>
            <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to="/"
                isActive={(match, location) => {
                    return !Object.values(NAVIGATION_LINKS).some((link) => location.pathname.includes(link));
                }}
                onClick={onClick}
            >
                <div className={styles['nav-link-option']}>
                    <Icon id={IconId.SETTINGS} className={styles.icon} />
                    {reactTranslator.getMessage('options_nav_link_general')}
                </div>
            </NavLink>
            <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to={NAVIGATION_LINKS.ABOUT}
                onClick={onClick}
            >
                <div className={styles['nav-link-option']}>
                    <Icon id={IconId.ABOUT} className={styles.icon} />
                    {reactTranslator.getMessage('options_nav_link_about')}
                </div>
            </NavLink>
            <NavLink
                className={styles.item}
                activeClassName={styles.active}
                to={NAVIGATION_LINKS.LIMITS}
                onClick={onClick}
            >
                <div className={styles['nav-link-option']}>
                    <Icon id={IconId.RULES_LIMITS} className={styles.icon} />
                    {reactTranslator.getMessage('options_nav_link_rule_limits')}
                </div>
            </NavLink>
        </div>
    );
};

export { Nav };
