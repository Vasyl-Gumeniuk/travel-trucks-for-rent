import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  type = 'button',
  variant = 'contained',
  main = false,
  selfcenter = false,
  children,
  ...otherProps
}) => {
  const buttonClasses = clsx(css.btn, {
    [css[variant]]: variant,
    [css.main]: main,
    [css.center]: selfcenter,
  });

  return (
    <button className={buttonClasses} type={type} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
