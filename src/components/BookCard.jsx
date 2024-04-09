import PropTypes from "prop-types"
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

import styles from "./BookCard.module.css";


function BookCard({data, handleLikedList}) {
    const { title, author, image, language, pages } = data;

    const [like, setLike] = useState(false);

    const likeHandler = () => {
        handleLikedList(data, like);
        setLike((like) => !like);
    };

    return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <div className={styles.info}>
            <h3 >{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language}</span>
                <span>{pages}</span>
            </div>
        </div>
        <button onClick={likeHandler}>
            <IoIosHeart color={like ? "red" : "white"} fontSize="1.8rem"/>
        </button>
    </div>
  )
}

BookCard.propTypes = {
  data: PropTypes.any,
  handleLikedList: PropTypes.any
}

export default BookCard
