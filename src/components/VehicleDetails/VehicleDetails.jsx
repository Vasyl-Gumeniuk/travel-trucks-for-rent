import { formatString, addSpaceToUnit } from '@utils/utils';
import css from './VehicleDetails.module.css';

const VehicleDetails = ({ form, length, width, height, tank, consumption }) => {
  const details = [
    { label: 'Form', value: formatString(form) },
    { label: 'Length', value: addSpaceToUnit(length) },
    { label: 'Width', value: addSpaceToUnit(width) },
    { label: 'Height', value: addSpaceToUnit(height) },
    { label: 'Tank', value: addSpaceToUnit(tank) },
    { label: 'Consumption', value: consumption },
  ];

  return (
    <div className={css.wrapper}>
      <h4 className={css.title}>Vehicle Details</h4>
      <hr className={css.separator} />
      <ul className={css.list}>
        {details.map((detail, index) => (
          <li key={index} className={css.item}>
            {detail.label} <span>{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleDetails;
