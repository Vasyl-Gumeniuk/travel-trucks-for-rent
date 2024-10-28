import clsx from 'clsx';

import css from './Icon.module.css';

const Icon = ({ name, className = '', active = false, ...props }) => {
  if (!name) {
    console.warn('Icon component requires a "name" prop.');
    return null;
  }

  return (
    <svg
      className={clsx(css.icon, className && css[className], {
        [css.active]: active,
      })}
      {...props}
    >
      <use xlinkHref={`/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;
