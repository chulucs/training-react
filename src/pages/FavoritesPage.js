import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {favoriteActions} from '../store/favoriteSlice';

import {BASE_URL} from '../components/Popular/PopularMovieItem';
import {IMAGE_SIZE} from '../components/Popular/PopularMovieItem';
import classes from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoriteShow = useSelector((state) => state.fav.favorites);
  const dispatch = useDispatch();
  const deleteFavoriteHandler = (title) => {
    dispatch(favoriteActions.removeElement(title));
  }
  
  return (
    <Fragment>
      <h2 className={classes.h2}>Página de favoritos!</h2>
      <ul className={classes.ul}>
          {favoriteShow.map(item => <li key={item.title} onClick={deleteFavoriteHandler.bind(null, item.title)}>
            <img src={BASE_URL + "w"+ IMAGE_SIZE + item.image} alt={item.title} />
            </li>)}
            
      </ul>
    </Fragment>
  );
};

export default FavoritesPage;
