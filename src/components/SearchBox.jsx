import PropTypes from "prop-types"
import { IoIosSearch } from "react-icons/io";

import styles from "./SearchBox.module.css"

function SearchBox({search, setSearch, searchHandler}) {

  return (
    <div className={styles.search}>
        <input  type="text"
                placeholder="Search Title"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />

            <button onClick={searchHandler}> <IoIosSearch /> </button>
    </div>
  );
}

SearchBox.propTypes = {
  search: PropTypes.any,
  searchHandler: PropTypes.any,
  setSearch: PropTypes.func
}

export default SearchBox
