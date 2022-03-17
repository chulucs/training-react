import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../../store/favoriteSlice";

import { BASE_URL } from "../Popular/PopularMovieItem";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const dispatch = useDispatch();
  let data = props.releaseDate;
  if (!props.releaseDate) {
    data = 'undefined';
  }

  const addListHandler = () => {
    dispatch(
      favoriteActions.addElement({
        title: props.title,
        image: props.image,
        description: props.description,
      })
    );
    console.log(
      "O título " + props.title + " foi enviado para a lista de favoritos."
    );
  };

  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes["modal--container"]}>
          <img src={`${BASE_URL}w780/${props.image}`} alt="movie/show poster" />
          <div className={classes["modal--btn__close"]} onClick={props.onClose}>
            X
          </div>
        </div>
        <div className={classes["modal--container__info"]}>
          <p className={classes["modal--container__release-date"]}>
            Data de Lançamento - {data}
          </p>
          <div className={classes["modal--container__description"]}>
            {props.description}
          </div>
        </div>
        <div className={classes["modal--container__button"]}>
          <button onClick={addListHandler}>Add to list</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
