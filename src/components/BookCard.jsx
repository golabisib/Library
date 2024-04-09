import PropTypes from "prop-types"
function BookCard({ data : {title, author, image, language, pages }}) {
  return (
    <>
    <img src={image} alt={title} />
    <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
            <span>{language}</span>
            <span>{pages}</span>
        </div>
    <button>like</button>
    </div>
    </>
  )
}

BookCard.propTypes = {
  data: PropTypes.any
}

export default BookCard
