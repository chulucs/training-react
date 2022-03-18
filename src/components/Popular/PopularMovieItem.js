import { Fragment, useState } from "react";
import ReactDom from "react-dom";
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";

import classes from "./PopularMovieItem.module.css";

export const BASE_URL = "https://image.tmdb.org/t/p/";
export const IMAGE_SIZE = "300";

const PopularMovieItem = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
    setOpenModal(true);
  }
  const closeModalHandler = () => {
    setOpenModal(false);
  }
  let classList = '';
  if (props.slider === 1) {
    classList = `${classes.listItem} ${classes['listItem--right']}`;
  } else if (props.slider === -1) {
    classList = `${classes.listItem} ${classes['listItem--left']}`;
  } else {
    classList = `${classes.listItem}`;
  }

  return (
    <Fragment>
      <li className={classList} onClick={openModalHandler}>
        <div>
          <div>
            <img src={BASE_URL + "w" +IMAGE_SIZE + props.imageUrl} alt="" />
          </div>
        </div>
      </li>
      {openModal && ReactDom.createPortal(<Backdrop onClose={closeModalHandler} />, document.getElementById("backdrop"))}
      {openModal && ReactDom.createPortal(
        <Modal
          title={props.title}
          image={props.imagePoster}
          description={props.description}
          releaseDate={props.releaseDate}
          onClose={closeModalHandler}
        />,
        document.getElementById("modal-show")
      )}
    </Fragment>
  );
};

export default PopularMovieItem;
