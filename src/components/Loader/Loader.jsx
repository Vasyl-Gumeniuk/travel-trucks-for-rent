import { CircleLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <CircleLoader color="#9bcc00" />
    </div>
  );
};

export default Loader;
