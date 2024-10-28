import Camper from '@components/Camper/Camper';

import css from './CamperList.module.css';

const CamperList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No campers available.</p>;
  }

  return (
    <ul className={css.list}>
      {items.map((camper, idx) => (
        <Camper key={camper.id} camper={camper} first={idx === 0} />
      ))}
    </ul>
  );
};

export default CamperList;
