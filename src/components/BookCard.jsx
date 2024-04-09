import PropTypes from "prop-types"
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

import styles from "./BookCard.module.css";

function BookCard({ data : {title, author, image, language, pages }}) {

    const [like, setLike] = useState(false);

    const likeHandler = () => {setLike(like => !like)};

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
    <button onClick={likeHandler}>
        <IoIosHeart color={like ? "red" : "white"} fontSize="1.8rem"/>
    </button>
    </div>
    </div>
  )
}

BookCard.propTypes = {
  data: PropTypes.any
}

export default BookCard
