import { Link } from 'react-router-dom';

import CamperHeader from '@components/CamperHeader/CamperHeader';
import EquipmentList from '@components/EquipmentList/EquipmentList';
import Button from '@components/Button/Button';

import { getFilteredEquipment } from '@utils/utils';

import css from './Camper.module.css';

const Camper = ({ camper, first }) => {
  const { id, name, description, gallery = [] } = camper;
  const equipment = getFilteredEquipment(camper);

  const imageSrc = gallery.length > 0 ? gallery[0].thumb : '';

  return (
    <li className={css.camperCard}>
      {imageSrc && (
        <img src={imageSrc} alt={name} className={css.camperImage} />
      )}

      <div className={css.camperDetails}>
        <CamperHeader camper={camper} first={first} />
        <p className={css.camperDescription}>{description}</p>
        <EquipmentList equipment={equipment} />

        <Button>
          <Link to={`/catalog/${id}/features`} className={css.link}>
            Show More
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default Camper;
