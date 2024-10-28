import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Icon from '@components/Icon/Icon';

import { selectIsFavorite } from '@redux/favorites/selectors';
import { addFavorite, removeFavorite } from '@redux/favorites/slice';
import { toastAlert } from '@utils/toastAlert';

import css from './CamperHeader.module.css';

const CamperHeader = ({ camper, first }) => {
  const { id, name, price, rating, location, reviews = [] } = camper;
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => selectIsFavorite(state, id));
  const locationPath = useLocation();

  const isPathDetails = locationPath.pathname.includes('/catalog/');

  const handleFavoriteClick = () => {
    const action = isFavorite ? removeFavorite(id) : addFavorite(camper);
    const message = isFavorite
      ? 'Camper removed from favorites'
      : 'Camper added to favorites';

    dispatch(action);
    toastAlert.info(message);
  };

  const formattedPrice = price ? `€${price.toFixed(2)}` : 'N/A';
  const reversedLocation = location.split(', ').reverse().join(', ');

  return (
    <div className={css.header}>
      <div className={css.headerContent}>
        <h2 className={css.camperTitle}>{name}</h2>

        {!isPathDetails && (
          <p className={css.camperPrice}>
            <span className={css.price}>{formattedPrice}</span>
            <Icon
              name="icon-heart"
              className="iconHeart"
              onClick={handleFavoriteClick}
              active={isFavorite}
            />
          </p>
        )}
      </div>

      <p className={css.camperRating}>
        <span className={css.rating}>
          <Icon name="icon-star" className="iconStar" />
          <span className={clsx(!first && css.ratingValue)}>
            {rating} ({reviews.length} Reviews)
          </span>
        </span>
        <span className={css.location}>
          <Icon name="icon-map" className="smallest" />
          {reversedLocation}
        </span>
      </p>

      {isPathDetails && <p className={css.price}>{formattedPrice}</p>}
    </div>
  );
};

export default CamperHeader;
