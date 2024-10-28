import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './CamperPageNavigation.module.css';

const navigationItems = [
  { path: 'features', label: 'Features' },
  { path: 'reviews', label: 'Reviews' },
];

export const CamperPageNavigation = () => {
  return (
    <ul className={css.menu}>
      {navigationItems.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            aria-label={`Navigate to ${label}`}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default CamperPageNavigation;
